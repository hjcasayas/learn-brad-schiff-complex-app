import type { IUserRepository, UserEntity } from "../user/index.js";

export class UserRepository implements IUserRepository {
    constructor(private implementation: IUserRepository) { }

    add = async (user: UserEntity): Promise<void> => {
        return await this.implementation.add(user);
    };
}