// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore';
import type { StudentWhitelistItem } from '../types';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAmaXczZirewpqOrCA0NPnsEMdIQqzS1v0",
  authDomain: "nghedeutschduonghoang.firebaseapp.com",
  projectId: "nghedeutschduonghoang",
  storageBucket: "nghedeutschduonghoang.firebasestorage.app",
  messagingSenderId: "888095531631",
  appId: "1:888095531631:web:2bb3140495f13dc1f2239a",
  measurementId: "G-XL463RK3MN"
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics safely
export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (err) {
    console.warn('Firebase Analytics not supported or failed to initialize:', err);
  }
}

export const ADMIN_EMAIL = 'duong027@gmail.com';
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export async function loginWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function logout(): Promise<void> {
  await signOut(auth);
}

export function subscribeToAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export function isUserAdmin(email?: string | null): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

export function formatDateTimeVN(date: Date = new Date()): string {
  const pad = (n: number) => n.toString().padStart(2, '0');
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${hours}:${minutes} ${day}/${month}/${year}`;
}

const WHITELIST_COLLECTION = 'whitelist';

export async function fetchWhitelist(): Promise<StudentWhitelistItem[]> {
  try {
    const colRef = collection(db, WHITELIST_COLLECTION);
    const snap = await getDocs(colRef);
    const list: StudentWhitelistItem[] = [];
    snap.forEach((d) => {
      list.push({
        id: d.id,
        ...(d.data() as Omit<StudentWhitelistItem, 'id'>),
      });
    });
    return list;
  } catch (err) {
    console.error('Error fetching whitelist:', err);
    throw err;
  }
}

export async function addStudent(
  item: Omit<StudentWhitelistItem, 'id'>
): Promise<string> {
  const cleanEmail = item.email.trim().toLowerCase();
  // Dùng email làm id hoặc doc id sạch
  const docId = cleanEmail.replace(/[^a-zA-Z0-9_.-]/g, '_');
  const docRef = doc(db, WHITELIST_COLLECTION, docId);
  const payload = {
    ...item,
    email: cleanEmail,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  await setDoc(docRef, payload, { merge: true });
  return docId;
}

export async function updateStudent(
  id: string,
  updates: Partial<StudentWhitelistItem>
): Promise<void> {
  const docRef = doc(db, WHITELIST_COLLECTION, id);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: new Date().toISOString(),
  });
}

export async function deleteStudent(id: string): Promise<void> {
  const docRef = doc(db, WHITELIST_COLLECTION, id);
  await deleteDoc(docRef);
}

export async function checkAccessPermission(email?: string | null): Promise<{
  isAllowed: boolean;
  isAdmin: boolean;
  student?: StudentWhitelistItem;
}> {
  if (!email) {
    return { isAllowed: false, isAdmin: false };
  }

  const cleanEmail = email.trim().toLowerCase();
  const isAdmin = cleanEmail === ADMIN_EMAIL.toLowerCase();

  // Admin luôn luôn được truy cập
  if (isAdmin) {
    return { isAllowed: true, isAdmin: true };
  }

  try {
    const colRef = collection(db, WHITELIST_COLLECTION);
    const q = query(colRef, where('email', '==', cleanEmail));
    const snap = await getDocs(q);

    if (snap.empty) {
      return { isAllowed: false, isAdmin: false };
    }

    const firstDoc = snap.docs[0];
    const data = firstDoc.data() as StudentWhitelistItem;
    const isAllowed = data.status === 'active';

    return {
      isAllowed,
      isAdmin: false,
      student: { id: firstDoc.id, ...data },
    };
  } catch (error) {
    console.error('Error checking permission:', error);
    // Nếu có lỗi mạng hoặc Firestore chưa tạo, nhưng là Admin vẫn cho qua
    return { isAllowed: isAdmin, isAdmin };
  }
}

// Khởi tạo các tài khoản mẫu nếu chưa có dữ liệu nào trong whitelist
export async function seedInitialWhitelistIfEmpty(): Promise<void> {
  try {
    const seedKey = `whitelist_seeded_${firebaseConfig.projectId}`;
    if (typeof window !== 'undefined' && localStorage.getItem(seedKey)) {
      return;
    }
    const colRef = collection(db, WHITELIST_COLLECTION);
    const snap = await getDocs(colRef);
    if (!snap.empty) {
      if (typeof window !== 'undefined') localStorage.setItem(seedKey, 'true');
      return;
    }

    const initialStudents: Omit<StudentWhitelistItem, 'id'>[] = [
      {
        fullName: 'Amerii Doan',
        email: 'thinhdtm@gmail.com',
        phone: 'Zalo: 015750995889',
        package: 'VVIP',
        autoLock2TB: true,
        status: 'active',
        grantedAt: '11:52 11/08/2026',
      },
      {
        fullName: 'Phạm Kiều Trang',
        email: 'phamkieutrang003@gmail.com',
        phone: 'Zalo: 0865459322',
        package: 'VVIP',
        autoLock2TB: true,
        status: 'active',
        grantedAt: '09:00 30/07/2026',
      },
      {
        fullName: 'Phạm Thanh Thanh',
        email: 'thanhthanhpham199x@gmail.com',
        phone: 'Zalo: 0888048333',
        package: 'VVIP',
        autoLock2TB: true,
        status: 'active',
        grantedAt: '22:30 27/07/2026',
      },
      {
        fullName: 'Admin',
        email: 'duong027@gmail.com',
        package: 'VVIP',
        autoLock2TB: true,
        status: 'active',
        grantedAt: '09:44 06/07/2026',
      },
    ];

    for (const student of initialStudents) {
      await addStudent(student);
    }
    if (typeof window !== 'undefined') localStorage.setItem(seedKey, 'true');
  } catch (e) {
    console.warn('Initial seeding skipped or failed:', e);
  }
}

