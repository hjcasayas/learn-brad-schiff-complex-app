import type { UserModel } from "./index.js";

export interface IUserService {
    register: (user: UserModel) => Promise<void>;
}