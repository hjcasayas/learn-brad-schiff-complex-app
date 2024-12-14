import type { UserEntity } from "../user/index.js";

export interface IUserRepository {
    add: (user: UserEntity) => Promise<void>;
    getByUsernameAndPassword: (params: {username: string; password: string;}) => Promise<UserEntity>;
}