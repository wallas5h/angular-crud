export interface UserLoginDto {
  email: string;
  password: string;
}
type roles = "admin" | "user" | "sales" | "guest";

export interface createUserRegisterDto {
  email: string;
  password: string;
}
export interface UserRegisterDto2 {
  email: string;
  password: string;
  confirmPassword: string;
  role: roles;
  isActive: boolean;
}
export interface UserModel {
  id: string;
  email: string;
  role: roles;
  isActive: boolean;
}

export interface UserResponseEntity {
  _id: string;
  email: string;
  role: string;
  isActive: boolean;
}
export interface UserUpdateRequest {
  _id: string | null;
  email: string | null;
  role: string | null;
  isActive: boolean | null;
}
