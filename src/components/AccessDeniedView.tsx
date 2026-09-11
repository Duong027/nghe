import React, { useState } from 'react';
import { ShieldX, RefreshCw, LogOut, MessageCircle, Mail, Sun, Moon } from 'lucide-react';
import { logout } from '../services/firebase';
import { User } from 'firebase/auth';

interface AccessDeniedViewProps {
  user: User;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onRecheck: () => void;
}

export const AccessDeniedView: React.FC<AccessDeniedViewProps> = ({
  user,
  isDarkMode,
  toggleTheme,
  onRecheck,
}) => {
  const [isChecking, setIsChecking] = useState<boolean>(false);

  const handleRecheck = async () => {
    setIsChecking(true);
    await onRecheck();
    setTimeout(() => {
      setIsChecking(false);
    }, 600);
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

      {/* Main Denial Card */}
      <div className="max-w-md w-full mx-auto my-auto space-y-6 animate-fade-in">
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md p-6 sm:p-8 text-center space-y-5">
          {/* Warning Icon */}
          <div className="w-16 h-16 bg-rose-50 dark:bg-rose-950/60 rounded-2xl flex items-center justify-center mx-auto border border-rose-100 dark:border-rose-900 text-rose-600 dark:text-rose-400">
            <ShieldX className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Chưa Được Cấp Quyền Truy Cập
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm leading-relaxed">
              Tài khoản Google của bạn hiện chưa nằm trong danh sách học viên được kích hoạt hoặc đã tạm khóa.
            </p>
          </div>

          {/* Email Info box */}
          <div className="p-3 bg-stone-50 dark:bg-stone-850 rounded-xl border border-stone-200 dark:border-stone-800 text-xs space-y-1">
            <div className="text-stone-500 dark:text-stone-400">Email đang đăng nhập:</div>
            <div className="font-mono font-semibold text-stone-800 dark:text-stone-200 break-all">
              {user.email || 'Không xác định'}
            </div>
          </div>

          {/* Contact Admin Box */}
          <div className="bg-indigo-50/60 dark:bg-indigo-950/40 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/60 text-left space-y-2 text-xs">
            <div className="font-semibold text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Cách kích hoạt tài khoản:
            </div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Vui lòng liên hệ trực tiếp với quản trị viên qua Zalo hoặc gửi email kèm địa chỉ Gmail trên để được thêm vào danh sách học viên.
            </p>
            <div className="pt-1 flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-medium">
              <Mail className="w-3.5 h-3.5" />
              <span>Admin: duong027@gmail.com</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={handleRecheck}
              disabled={isChecking}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-stone-200 text-white dark:text-stone-900 shadow-xs cursor-pointer transition-colors disabled:opacity-60"
            >
              <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
              <span>{isChecking ? 'Đang kiểm tra lại...' : 'Kiểm tra lại quyền truy cập'}</span>
            </button>

            <button
              type="button"
              onClick={() => logout()}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-850 text-stone-700 dark:text-stone-300 border border-stone-250 dark:border-stone-800 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-stone-500" />
              <span>Đăng xuất hoặc đổi tài khoản khác</span>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-[11px] text-stone-400 dark:text-stone-600">
        © 2026 Luyện Nghe Tiếng Đức
      </div>
    </div>
  );
};
