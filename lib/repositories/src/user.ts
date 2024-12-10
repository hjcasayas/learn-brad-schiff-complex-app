import type { IUserRepository, UserEntity } from "@complex-app/lib-interfaces/index.js";

export class UserRepository implements IUserRepository {
    add = async (user: UserEntity): Promise<void>  => {
        
    };
}