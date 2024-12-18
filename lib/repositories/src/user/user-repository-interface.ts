import type { UserEntity } from "../user/index.js";

export interface IUserRepository {
    add: (user: UserEntity) => Promise<UserEntity | null>;
    getByUsername: ({ username }: { username: string }) => Promise<UserEntity | null>;
}