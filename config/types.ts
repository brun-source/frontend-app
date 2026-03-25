// frontend-app/types.ts

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  author?: User; // Populated relation
}

export interface Comment {
  id: string;
  blogPostId: string;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author?: User; // Populated relation
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export type Theme = 'light' | 'dark';

export interface AppState {
  theme: Theme;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface Action<T = any> {
  type: string;
  payload?: T;
}

export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoading: boolean;
}

export type FormValues = {
  [key: string]: any;
};