import React, { useState, useEffect, useMemo } from 'react';
import {
  Users,
  UserPlus,
  Search,
  Pencil,
  Lock,
  Unlock,
  Trash2,
  Smartphone,
  CheckCircle2,
  XCircle,
  X,
  RefreshCw,
  LogOut,
  GraduationCap,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import type { StudentWhitelistItem } from '../types';
import {
  fetchWhitelist,
  addStudent,
  updateStudent,
  deleteStudent,
  formatDateTimeVN,
  seedInitialWhitelistIfEmpty,
  logout,
} from '../services/firebase';
import { User } from 'firebase/auth';

interface AdminDashboardProps {
  currentUser: User;
  onSwitchToStudentView: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
  onSwitchToStudentView,
}) => {
  const [students, setStudents] = useState<StudentWhitelistItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<StudentWhitelistItem | null>(null);
  const [studentToDelete, setStudentToDelete] = useState<StudentWhitelistItem | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [toast, setToast] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setToast({ text, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Form states
  const [formFullName, setFormFullName] = useState<string>('');
  const [formEmail, setFormEmail] = useState<string>('');
  const [formPhone, setFormPhone] = useState<string>('');
  const [formPackage, setFormPackage] = useState<string>('VVIP');
  const [formAutoLock, setFormAutoLock] = useState<boolean>(true);
  const [formStatus, setFormStatus] = useState<'active' | 'locked'>('active');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const loadData = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      await seedInitialWhitelistIfEmpty();
      const list = await fetchWhitelist();
      // Sắp xếp đưa mới nhất hoặc admin lên đầu
      setStudents(list);
    } catch (err: any) {
      console.error('Error loading whitelist:', err);
      setErrorMessage(
        'Không thể tải dữ liệu từ Firestore. Vui lòng kiểm tra kết nối.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Lọc học viên theo tìm kiếm
  const filteredStudents = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return students;
    return students.filter(
      (s) =>
        s.fullName.toLowerCase().includes(term) ||
        s.email.toLowerCase().includes(term) ||
        (s.phone && s.phone.toLowerCase().includes(term))
    );
  }, [students, searchTerm]);

  const handleOpenAddModal = () => {
    setEditingStudent(null);
    setFormFullName('');
    setFormEmail('');
    setFormPhone('');
    setFormPackage('VVIP');
    setFormAutoLock(true);
    setFormStatus('active');
    setErrorMessage('');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (student: StudentWhitelistItem) => {
    setEditingStudent(student);
    setFormFullName(student.fullName);
    setFormEmail(student.email);
    setFormPhone(student.phone?.replace('Zalo: ', '') || '');
    setFormPackage(student.package || 'VVIP');
    setFormAutoLock(student.autoLock2TB ?? true);
    setFormStatus(student.status);
    setErrorMessage('');
    setIsModalOpen(true);
  };

  const handleSaveStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formFullName.trim() || !formEmail.trim()) {
      setErrorMessage('Vui lòng điền họ tên và email hợp lệ.');
      return;
    }

    const cleanEmail = formEmail.trim().toLowerCase();
    if (!cleanEmail.includes('@')) {
      setErrorMessage('Định dạng email không hợp lệ.');
      return;
    }

    setIsSaving(true);
    setErrorMessage('');

    try {
      const phoneString = formPhone.trim()
        ? formPhone.trim().startsWith('Zalo:')
          ? formPhone.trim()
          : `Zalo: ${formPhone.trim()}`
        : '';

      if (editingStudent && editingStudent.id) {
        // Cập nhật học viên
        await updateStudent(editingStudent.id, {
          fullName: formFullName.trim(),
          email: cleanEmail,
          phone: phoneString,
          package: formPackage,
          autoLock2TB: formAutoLock,
          status: formStatus,
        });
      } else {
        // Thêm học viên mới
        await addStudent({
          fullName: formFullName.trim(),
          email: cleanEmail,
          phone: phoneString,
          package: formPackage,
          autoLock2TB: formAutoLock,
          status: formStatus,
          grantedAt: formatDateTimeVN(new Date()),
        });
      }

      setIsModalOpen(false);
      showToast(editingStudent ? 'Đã cập nhật học viên thành công!' : 'Đã thêm học viên mới thành công!');
      await loadData();
    } catch (err: any) {
      console.error('Save student error:', err);
      setErrorMessage(err.message || 'Lưu thông tin thất bại.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleStatus = async (student: StudentWhitelistItem) => {
    if (!student.id) return;
    const newStatus = student.status === 'active' ? 'locked' : 'active';
    try {
      await updateStudent(student.id, { status: newStatus });
      setStudents((prev) =>
        prev.map((s) => (s.id === student.id ? { ...s, status: newStatus } : s))
      );
      showToast(
        newStatus === 'active'
          ? `Đã kích hoạt quyền cho ${student.fullName}`
          : `Đã tạm khóa quyền của ${student.fullName}`
      );
    } catch (err: any) {
      console.error('Toggle status error:', err);
      showToast('Không thể thay đổi trạng thái lúc này.', 'error');
    }
  };

  const handleDeleteClick = (student: StudentWhitelistItem) => {
    if (!student.id) return;
    setStudentToDelete(student);
  };

  const handleConfirmDelete = async () => {
    if (!studentToDelete || !studentToDelete.id) return;

    setIsDeleting(true);
    try {
      await deleteStudent(studentToDelete.id);
      setStudents((prev) => prev.filter((s) => s.id !== studentToDelete.id));
      showToast(`Đã xóa học viên "${studentToDelete.fullName}" thành công!`);
      setStudentToDelete(null);
    } catch (err: any) {
      console.error('Delete error:', err);
      showToast(err.message || 'Không thể xóa học viên. Vui lòng thử lại.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 py-6 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Navbar Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                <Users className="w-6 h-6" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                Quản lý học viên & Cấp quyền truy cập (Whitelist)
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 pl-1">
              Chỉ những email học viên được cấp quyền dưới đây mới có thể đăng nhập vào ứng dụng của bạn.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-center">
            <button
              type="button"
              onClick={onSwitchToStudentView}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-stone-900 border border-stone-250 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-850 shadow-xs cursor-pointer transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Giao diện học viên</span>
            </button>

            <button
              type="button"
              onClick={() => logout()}
              title="Đăng xuất"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-stone-900 border border-stone-250 dark:border-stone-800 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 shadow-xs cursor-pointer transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Đăng xuất</span>
            </button>
          </div>
        </header>

        {/* Main Content Card matching screenshot */}
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm p-4 sm:p-6 space-y-5">
          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              Danh sách đã cấp quyền
              <span className="text-sm font-semibold px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                {students.length}
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Search input */}
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm theo tên hoặc email..."
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-stone-250 dark:border-stone-750 bg-stone-50 dark:bg-stone-950 focus:bg-white dark:focus:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-stone-900 dark:text-stone-100"
                />
              </div>

              {/* Refresh Button */}
              <button
                type="button"
                onClick={loadData}
                disabled={isLoading}
                title="Tải lại danh sách"
                className="p-2 rounded-xl border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 cursor-pointer disabled:opacity-50 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>

              {/* Add Student Button */}
              <button
                type="button"
                onClick={handleOpenAddModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <UserPlus className="w-4 h-4" />
                <span>+ Thêm học viên</span>
              </button>
            </div>
          </div>

          {/* Table matching mota.PNG */}
          <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 dark:bg-stone-850/60 border-b border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-semibold">
                <tr>
                  <th className="py-3.5 px-4 w-12 text-center">STT</th>
                  <th className="py-3.5 px-4 min-w-[140px]">Họ tên</th>
                  <th className="py-3.5 px-4 min-w-[200px]">Email học viên</th>
                  <th className="py-3.5 px-4 text-center min-w-[90px]">Gói học</th>
                  <th className="py-3.5 px-4 text-center min-w-[120px]">Tự khóa (2TB)</th>
                  <th className="py-3.5 px-4 text-center min-w-[110px]">Trạng thái</th>
                  <th className="py-3.5 px-4 min-w-[130px]">Ngày cấp</th>
                  <th className="py-3.5 px-4 text-center w-28">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-stone-800 bg-white dark:bg-stone-900">
                {isLoading ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-stone-500 dark:text-stone-400">
                      <div className="inline-flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin text-indigo-500" />
                        <span>Đang tải danh sách học viên...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-10 text-center text-stone-500 dark:text-stone-400">
                      Không tìm thấy học viên nào phù hợp.
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student, index) => {
                    const isActive = student.status === 'active';
                    return (
                      <tr
                        key={student.id || index}
                        className="hover:bg-stone-50/70 dark:hover:bg-stone-850/40 transition-colors"
                      >
                        {/* STT */}
                        <td className="py-3.5 px-4 text-center text-stone-500 font-medium">
                          {index + 1}
                        </td>

                        {/* Họ tên */}
                        <td className="py-3.5 px-4 font-bold text-stone-900 dark:text-stone-100">
                          <div className="flex items-center gap-1.5">
                            {student.email.toLowerCase() === currentUser.email?.toLowerCase() && (
                              <ShieldCheck className="w-4 h-4 text-indigo-500" title="Admin chính" />
                            )}
                            <span>{student.fullName}</span>
                          </div>
                        </td>

                        {/* Email học viên & Zalo */}
                        <td className="py-3.5 px-4 space-y-0.5">
                          <div className="font-mono text-xs text-stone-700 dark:text-stone-300">
                            {student.email}
                          </div>
                          {student.phone && (
                            <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                              {student.phone}
                            </div>
                          )}
                        </td>

                        {/* Gói học (VVIP badge orange) */}
                        <td className="py-3.5 px-4 text-center">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                            {student.package || 'VVIP'}
                          </span>
                        </td>

                        {/* Tự khóa (2TB) */}
                        <td className="py-3.5 px-4 text-center">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                            <Smartphone className="w-3.5 h-3.5" />
                            {student.autoLock2TB ? 'Bật' : 'Tắt'}
                          </span>
                        </td>

                        {/* Trạng thái */}
                        <td className="py-3.5 px-4 text-center">
                          {isActive ? (
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                              Hoạt động
                            </span>
                          ) : (
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                              Tạm khóa
                            </span>
                          )}
                        </td>

                        {/* Ngày cấp */}
                        <td className="py-3.5 px-4 text-xs text-stone-500 dark:text-stone-400 whitespace-nowrap">
                          {student.grantedAt || '---'}
                        </td>

                        {/* Hành động */}
                        <td className="py-3.5 px-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            {/* Chỉnh sửa */}
                            <button
                              type="button"
                              onClick={() => handleOpenEditModal(student)}
                              title="Chỉnh sửa thông tin"
                              className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>

                            {/* Khóa/Mở khóa */}
                            <button
                              type="button"
                              onClick={() => handleToggleStatus(student)}
                              title={isActive ? 'Khóa quyền truy cập' : 'Kích hoạt lại'}
                              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                                isActive
                                  ? 'text-stone-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40'
                                  : 'text-rose-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                              }`}
                            >
                              {isActive ? (
                                <Lock className="w-3.5 h-3.5" />
                              ) : (
                                <Unlock className="w-3.5 h-3.5" />
                              )}
                            </button>

                            {/* Xóa */}
                            <button
                              type="button"
                              onClick={() => handleDeleteClick(student)}
                              title="Xóa học viên"
                              className="p-1.5 rounded-md transition-colors cursor-pointer text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 animate-fade-in">
          <div
            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg border text-xs sm:text-sm font-medium ${
              toast.type === 'error'
                ? 'bg-rose-50 dark:bg-rose-950/90 text-rose-700 dark:text-rose-200 border-rose-200 dark:border-rose-900'
                : 'bg-emerald-50 dark:bg-emerald-950/90 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-900'
            }`}
          >
            {toast.type === 'error' ? (
              <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            )}
            <span>{toast.text}</span>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="ml-2 text-stone-400 hover:text-stone-600 p-0.5 rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Modal Xác nhận Xóa Học Viên (Thay thế window.confirm để không bị iframe chặn) */}
      {studentToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white dark:bg-stone-900 w-full max-w-md rounded-2xl shadow-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
            <div className="p-5 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900 shrink-0">
                  <Trash2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                    Xác nhận xóa học viên?
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                    Bạn có chắc chắn muốn thu hồi quyền và xóa học viên này khỏi danh sách? Hành động này không thể hoàn tác.
                  </p>
                </div>
              </div>

              {/* Thông tin học viên cần xóa */}
              <div className="bg-stone-50 dark:bg-stone-850 p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-500">Học viên:</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">
                    {studentToDelete.fullName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Gmail:</span>
                  <span className="font-mono text-stone-800 dark:text-stone-200">
                    {studentToDelete.email}
                  </span>
                </div>
                {studentToDelete.phone && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Số điện thoại:</span>
                    <span className="text-stone-700 dark:text-stone-300">
                      {studentToDelete.phone}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={() => setStudentToDelete(null)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={handleConfirmDelete}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 transition-colors cursor-pointer shadow-xs disabled:opacity-60"
                >
                  {isDeleting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Đang xóa...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Xóa học viên</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Thêm/Sửa học viên */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white dark:bg-stone-900 w-full max-w-md rounded-2xl shadow-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 dark:border-stone-800">
              <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-indigo-600" />
                {editingStudent ? 'Chỉnh sửa học viên' : 'Thêm học viên mới'}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStudent} className="p-5 space-y-4">
              {errorMessage && (
                <div className="p-3 text-xs rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                  Họ và tên học viên *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Amerii Doan, Nguyễn Văn A"
                  value={formFullName}
                  onChange={(e) => setFormFullName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-stone-250 dark:border-stone-750 bg-stone-50 dark:bg-stone-950 focus:bg-white dark:focus:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                  Email học viên (Gmail đăng nhập) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="hocvien@gmail.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-stone-250 dark:border-stone-750 bg-stone-50 dark:bg-stone-950 focus:bg-white dark:focus:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-stone-900 dark:text-stone-100 font-mono"
                />
                <p className="text-[11px] text-stone-500">
                  Học viên sẽ dùng chính Gmail này để bấm Đăng nhập bằng Google vào xem bài học.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                  Số điện thoại / Zalo liên hệ
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: 0865459322"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-stone-250 dark:border-stone-750 bg-stone-50 dark:bg-stone-950 focus:bg-white dark:focus:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    Gói học
                  </label>
                  <select
                    value={formPackage}
                    onChange={(e) => setFormPackage(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-250 dark:border-stone-750 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none"
                  >
                    <option value="VVIP">VVIP</option>
                    <option value="VIP">VIP</option>
                    <option value="Cơ bản">Cơ bản</option>
                    <option value="Trọn đời">Trọn đời</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    Trạng thái
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as 'active' | 'locked')}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-250 dark:border-stone-750 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none"
                  >
                    <option value="active">Hoạt động</option>
                    <option value="locked">Tạm khóa</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formAutoLock}
                    onChange={(e) => setFormAutoLock(e.target.checked)}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-stone-300"
                  />
                  <span className="text-xs font-medium text-stone-700 dark:text-stone-300">
                    Tự khóa (2TB) - Giới hạn tối đa 2 thiết bị
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-stone-200 dark:border-stone-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
                >
                  {isSaving ? 'Đang lưu...' : editingStudent ? 'Lưu thay đổi' : 'Cấp quyền ngay'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
