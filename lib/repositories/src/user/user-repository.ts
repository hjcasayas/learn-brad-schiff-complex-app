import type { IUserRepository, UserEntity } from "../user/index.js";

export class UserRepository implements IUserRepository {
    constructor(private implementation: IUserRepository) { }

    add = async (user: UserEntity): Promise<UserEntity> => {
        return await this.implementation.add(user);
    };

    getByUsername = async (params: { username: string; password: string }): Promise<Omit<UserEntity, 'password'> | null> => {
        return await this.implementation.getByUsername(params);
    };
}