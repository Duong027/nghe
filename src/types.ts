export interface LessonItem {
  id: string;
  title: string;
  audioSrc?: string; // Đường dẫn file audio (ví dụ: '/audio/1.1.mp3' hoặc URL)
  text?: string;     // Đoạn văn bản / lời thoại (để trống nếu chưa có)
}

export interface Chapter {
  id: string;
  title: string;
  lessons: LessonItem[];
  level?: string; // Ví dụ: 'A1.1', 'A1.2', etc.
}

export interface StudentWhitelistItem {
  id?: string;
  fullName: string;
  email: string;
  phone?: string;
  package: string; // Gói học, ví dụ 'VVIP'
  autoLock2TB: boolean; // Tự khóa (2TB)
  status: 'active' | 'locked';
  grantedAt: string; // Ngày giờ cấp quyền, vd: "11:52 11/08/2026"
  createdAt?: string;
  updatedAt?: string;
}
