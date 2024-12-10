import type { IUserRepository, UserEntity } from "@user/index.js";

export class UserRepository implements IUserRepository {
    add = async (user: UserEntity): Promise<void>  => {
        
    };
}