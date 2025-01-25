// src/types/auth.types.ts
export interface AuthUser {
  email: string;
  id: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData extends LoginFormData {
  confirmPassword: string;
}
