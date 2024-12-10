import type { UserModel } from "@user/index.js";

export interface IUserService {
    register: (user: UserModel) => Promise<void>; 
}