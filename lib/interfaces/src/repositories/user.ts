import type { UserEntity } from "../entities/user.js";

export interface IUserRepository {
    add: (user: UserEntity) => Promise<void>
}