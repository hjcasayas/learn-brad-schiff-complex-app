import type { UserModel } from "./index.js";

export interface IUserService {
    register: (user: UserModel) => Promise<void>;
    login: ({ username, password }: { username: string; password: string; }) => Promise<UserModel | null>;
}