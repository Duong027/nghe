import React, { useState } from 'react';
import { BookOpen, ShieldAlert, Sparkles, Sun, Moon } from 'lucide-react';
import { loginWithGoogle } from '../services/firebase';

interface LoginViewProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onLoginSuccess: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({
  isDarkMode,
  toggleTheme,
  onLoginSuccess,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      await loginWithGoogle();
      onLoginSuccess();
    } catch (err: any) {
      console.error('Google Sign-In error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Hộp thoại đăng nhập đã bị đóng trước khi hoàn tất.');
      } else if (err.code === 'auth/popup-blocked') {
        setError('Trình duyệt đang chặn cửa sổ popup. Vui lòng bật cho phép popup để đăng nhập.');
      } else {
        setError(err.message || 'Đăng nhập bằng Google thất bại. Vui lòng thử lại.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col justify-between py-8 px-4 sm:px-6 transition-colors duration-200">
      {/* Top bar with theme toggle */}
      <div className="max-w-md w-full mx-auto flex justify-end">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDarkMode ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-850 shadow-xs cursor-pointer transition-colors"
        >
          {isDarkMode ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Sáng</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-stone-600" />
              <span>Tối</span>
            </>
          )}
        </button>
      </div>

      {/* Main Login Box */}
      <div className="max-w-md w-full mx-auto my-auto space-y-6">
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md p-6 sm:p-8 text-center space-y-6 animate-fade-in">
          {/* Logo / Badge */}
          <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-950/60 rounded-2xl flex items-center justify-center mx-auto border border-indigo-100 dark:border-indigo-900 shadow-xs">
            <BookOpen className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Luyện Nghe Tiếng Đức
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm leading-relaxed">
              Hệ thống giáo trình nghe chuẩn theo từng cấp độ, hỗ trợ dịch song ngữ và audio chuyên sâu.
            </p>
          </div>

          {error && (
            <div className="p-3 text-xs rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 flex items-start gap-2 text-left">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Login Button */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl text-sm font-semibold bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-750 text-stone-800 dark:text-stone-100 border border-stone-300 dark:border-stone-700 shadow-xs cursor-pointer transition-all active:scale-[0.99] disabled:opacity-60"
            >
              {/* Google G Logo SVG */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>{isLoading ? 'Đang xác thực Google...' : 'Đăng nhập với Google'}</span>
            </button>
          </div>

          <div className="pt-2 border-t border-stone-100 dark:border-stone-800">
            <div className="flex items-center justify-center gap-1.5 text-stone-500 dark:text-stone-400 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Chỉ những email được Admin duyệt mới có thể vào học</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
