import { useState, useEffect, useCallback } from 'react';
import { chaptersData } from './data/lessons';
import { ChapterSection } from './components/ChapterSection';
import { Sparkles, ArrowRight, BookOpen, Compass, Sun, Moon, LogOut, Shield, ShieldCheck } from 'lucide-react';
import { AdminDashboard } from './components/AdminDashboard';
import { LoginView } from './components/LoginView';
import { AccessDeniedView } from './components/AccessDeniedView';
import {
  subscribeToAuth,
  checkAccessPermission,
  logout,
  isUserAdmin,
  ADMIN_EMAIL,
} from './services/firebase';
import { User } from 'firebase/auth';
import type { StudentWhitelistItem } from './types';

const LEVELS = ['A1.1', 'A1.2', 'A2.1', 'A2.2', 'B1.1', 'B1.2'] as const;
type Level = typeof LEVELS[number];

// Helper để xác định chương thuộc cấp độ nào (Kapitel 1-6 thuộc A1.1)
const getChapterLevel = (chapter: typeof chaptersData[number]): Level => {
  if (chapter.level) {
    return chapter.level as Level;
  }
  const match = chapter.id.match(/kapitel-(\d+)/i);
  if (match) {
    const num = parseInt(match[1], 10);
    if (num >= 1 && num <= 6) {
      return 'A1.1';
    }
    if (num >= 7) {
      return 'A1.2';
    }
  }
  return 'A1.1'; // Fallback mặc định
};

export default function App() {
  const [activeLevel, setActiveLevel] = useState<Level>('A1.1');
  const [activeChapterId, setActiveChapterId] = useState<string>('kapitel-1');

  // Auth & Access States
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [studentInfo, setStudentInfo] = useState<StudentWhitelistItem | undefined>(undefined);
  const [isCheckingAccess, setIsCheckingAccess] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'student' | 'admin'>('student');

  // Dark mode theme state with persistence and system preference detection
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Kiểm tra quyền truy cập của người dùng
  const verifyAccess = useCallback(async (user: User) => {
    setIsCheckingAccess(true);
    try {
      const result = await checkAccessPermission(user.email);
      setHasAccess(result.isAllowed);
      setStudentInfo(result.student);

      // Nếu là Admin, mở Dashboard quản trị theo mặc định hoặc giữ trạng thái
      if (result.isAdmin) {
        // Nếu vừa đăng nhập hoặc chưa chọn view, mở trang admin
        setCurrentView((prev) => (prev === 'student' ? 'admin' : prev));
      } else {
        setCurrentView('student');
      }
    } catch (err) {
      console.error('Verify access error:', err);
      // Fallback cho Admin nếu có lỗi mạng
      if (isUserAdmin(user.email)) {
        setHasAccess(true);
        setCurrentView('admin');
      } else {
        setHasAccess(false);
      }
    } finally {
      setIsCheckingAccess(false);
    }
  }, []);

  // Lắng nghe trạng thái đăng nhập Firebase
  useEffect(() => {
    const unsubscribe = subscribeToAuth((user) => {
      setCurrentUser(user);
      setIsAuthLoading(false);

      if (user) {
        verifyAccess(user);
      } else {
        setHasAccess(null);
        setStudentInfo(undefined);
        setCurrentView('student');
      }
    });

    return () => unsubscribe();
  }, [verifyAccess]);

  // Lọc các chương thuộc cấp độ đang chọn
  const chaptersForSelectedLevel = chaptersData.filter(
    (chapter) => getChapterLevel(chapter) === activeLevel
  );

  // Xác định chương đang active
  const activeChapter =
    chaptersForSelectedLevel.find((c) => c.id === activeChapterId) ||
    chaptersForSelectedLevel[0] ||
    null;

  const handleLevelChange = (level: Level) => {
    setActiveLevel(level);
    const chapters = chaptersData.filter(
      (chapter) => getChapterLevel(chapter) === level
    );
    if (chapters.length > 0) {
      setActiveChapterId(chapters[0].id);
    } else {
      setActiveChapterId('');
    }
  };

  // 1. Màn hình chờ khi đang tải phiên đăng nhập
  if (isAuthLoading || (currentUser && isCheckingAccess && hasAccess === null)) {
    return (
      <div className="min-h-screen bg-stone-100 dark:bg-stone-950 flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-stone-600 dark:text-stone-400 text-sm font-medium">
            Đang xác thực thông tin tài khoản...
          </p>
        </div>
      </div>
    );
  }

  // 2. Nếu chưa đăng nhập: Hiển thị màn hình Login bằng Google
  if (!currentUser) {
    return (
      <LoginView
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onLoginSuccess={() => {}}
      />
    );
  }

  const isAdmin = isUserAdmin(currentUser.email);

  // 3. Nếu đã đăng nhập nhưng KHÔNG CÓ QUYỀN TRUY CẬP (không phải Admin và không có trong whitelist)
  if (!hasAccess && !isAdmin) {
    return (
      <AccessDeniedView
        user={currentUser}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onRecheck={() => verifyAccess(currentUser)}
      />
    );
  }

  // 4. Nếu là Admin và đang ở chế độ Quản trị (Dashboard)
  if (isAdmin && currentView === 'admin') {
    return (
      <AdminDashboard
        currentUser={currentUser}
        onSwitchToStudentView={() => setCurrentView('student')}
      />
    );
  }

  // 5. Giao diện Học viên (Học viên đã duyệt HOẶC Admin đang xem giao diện học viên)
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 py-6 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <main className="max-w-3xl mx-auto space-y-6">
        {/* Top bar điều hướng học viên & thông tin người dùng */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            {currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt="Avatar"
                className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center text-xs">
                {currentUser.displayName?.[0] || currentUser.email?.[0] || 'U'}
              </div>
            )}
            <div className="min-w-0 leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-semibold truncate text-stone-900 dark:text-stone-100">
                  {currentUser.displayName || currentUser.email?.split('@')[0]}
                </span>
                {isAdmin ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    <ShieldCheck className="w-3 h-3" />
                    Admin
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    {studentInfo?.package || 'Học viên'}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-stone-400 dark:text-stone-500 font-mono truncate">
                {currentUser.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Nút vào Dashboard dành riêng cho Admin */}
            {isAdmin && (
              <button
                type="button"
                onClick={() => setCurrentView('admin')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Quản lý học viên</span>
              </button>
            )}

            {/* Nút đổi theme Sáng/Tối */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Chuyển sang chế độ ban ngày' : 'Chuyển sang chế độ ban đêm'}
              title={isDarkMode ? 'Chế độ sáng' : 'Chế độ tối'}
              className="p-2 rounded-xl text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-750 transition-colors cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-stone-600" />
              )}
            </button>

            {/* Nút Đăng xuất */}
            <button
              type="button"
              onClick={() => logout()}
              title="Đăng xuất"
              className="p-2 rounded-xl text-stone-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header ứng dụng */}
        <header className="space-y-4">
          <div className="text-center space-y-1.5">
            <h1 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 flex items-center justify-center gap-2">
              <BookOpen className="w-6 h-6 text-stone-700 dark:text-stone-300" />
              Luyện Nghe Tiếng Đức
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm max-w-md mx-auto">
              Hệ thống bài nghe tiếng Đức chuẩn biên soạn từ giáo trình, hỗ trợ phụ đề song ngữ và dịch nghĩa tức thì.
            </p>
          </div>

          {/* Tab chọn cấp độ A1.1, A1.2, A2.1, A2.2, B1.1, B1.2 */}
          <div className="border-b border-stone-200 dark:border-stone-800 pb-2">
            <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center scrollbar-none">
              {LEVELS.map((level) => {
                const isActive = level === activeLevel;
                return (
                  <button
                    key={level}
                    onClick={() => handleLevelChange(level)}
                    className={`min-h-11 px-4.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer border whitespace-nowrap ${
                      isActive
                        ? 'bg-stone-900 text-white border-stone-900 dark:bg-stone-100 dark:text-stone-950 dark:border-stone-100 shadow-xs'
                        : 'bg-white text-stone-600 border-stone-200 dark:bg-stone-900 dark:text-stone-300 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-850 hover:text-stone-900 dark:hover:text-white'
                    }`}
                  >
                    {level}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Thanh chuyển Kapitel con (chỉ hiển thị nếu cấp độ có chương học) */}
          {chaptersForSelectedLevel.length > 0 && (
            <div className="flex flex-wrap justify-center gap-1.5 pt-1">
              {chaptersForSelectedLevel.map((chapter) => {
                const isActive = chapter.id === activeChapterId;
                const shortTitle = chapter.title.split(':')[0]; // Ví dụ: "Kapitel 1"
                return (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapterId(chapter.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-stone-200 text-stone-900 border-stone-400 dark:bg-stone-800 dark:text-stone-100 dark:border-stone-600 font-semibold'
                        : 'bg-white text-stone-600 border-stone-200 dark:bg-stone-900 dark:text-stone-300 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-850'
                    }`}
                  >
                    {shortTitle}
                  </button>
                );
              })}
            </div>
          )}
        </header>

        {/* Nội dung chính các bài nghe */}
        <div className="space-y-6 pt-2">
          {chaptersForSelectedLevel.length > 0 && activeChapter ? (
            <ChapterSection chapter={activeChapter} />
          ) : (
            /* Empty state cho các trình độ chưa có bài */
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 sm:p-10 text-center max-w-lg mx-auto space-y-6 shadow-xs animate-fade-in">
              <div className="w-14 h-14 bg-stone-50 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto border border-stone-200 dark:border-stone-700">
                <Compass className="w-7 h-7 text-stone-600 dark:text-stone-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  Đang cập nhật cấp độ {activeLevel}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-md mx-auto">
                  Nội dung các bài nghe, đoạn hội thoại và bản dịch tiếng Việt cho trình độ{' '}
                  <strong className="text-stone-800 dark:text-stone-200">{activeLevel}</strong> đang được biên soạn kỹ lưỡng để sớm ra mắt.
                </p>
              </div>

              <div className="bg-stone-50 dark:bg-stone-850 p-4 rounded-xl border border-stone-200 dark:border-stone-800 text-left space-y-2">
                <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200 font-semibold text-xs sm:text-sm">
                  <Sparkles className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                  Gợi ý học tập dành cho bạn:
                </div>
                <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm leading-relaxed">
                  Bạn có thể bắt đầu luyện nghe và từ vựng thật vững chắc tại trình độ{' '}
                  <strong className="text-stone-700 dark:text-stone-300">A1.1 (Kapitel 1 - 6)</strong> với đầy đủ bản dịch song ngữ và audio trước khi tiến tới các cấp độ nâng cao hơn!
                </p>
              </div>

              <button
                onClick={() => handleLevelChange('A1.1')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-900 transition-colors cursor-pointer shadow-xs"
              >
                Học Trình Độ A1.1
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
