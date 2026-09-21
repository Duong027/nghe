export interface LessonItem {
  id: string;
  title: string;
  subTitle?: string;  // Tiêu đề phụ / nhãn (ví dụ: 'Beispiel', 'Nummer 1') nằm trên audio
  audioSrc?: string; // Đường dẫn file audio (ví dụ: '/audio/1.1.mp3' hoặc URL)
  altAudioSrc?: string; // Đường dẫn file audio dự phòng
  text?: string;     // Đoạn văn bản / lời thoại (để trống nếu chưa có)
}

export interface Chapter {
  id: string;
  title: string;
  lessons: LessonItem[];
  level?: string; // Ví dụ: 'A1.1', 'A1.2', etc.
  category?: string; // Ví dụ: 'Đề thi A1'
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
