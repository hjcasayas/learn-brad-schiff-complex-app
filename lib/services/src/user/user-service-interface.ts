import type { UserModel } from "./index.js";

export interface IUserService {
    register: (user: UserModel) => Promise<void>;
    login: (params: { username: string; password: string; }) => Promise<Omit<UserModel, 'password'> | null>;
}