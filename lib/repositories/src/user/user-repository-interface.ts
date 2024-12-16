import type { UserEntity } from "../user/index.js";

export interface IUserRepository {
    add: (user: UserEntity) => Promise<UserEntity>;
    getByUsername: (params: { username: string; password: string; }) => Promise<Omit<UserEntity, 'password'> | null> ;
}