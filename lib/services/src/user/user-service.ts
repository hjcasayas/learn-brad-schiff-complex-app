import type { UserModel, IUserService } from "./index.js";

export class UserService implements IUserService {

    constructor(private implementation: IUserService) { }

    register = async (user: UserModel): Promise<void> => {
        return await this.implementation.register(user);
    }

    login = async (params: { username: string; password: string; }): Promise<Omit<UserModel, 'password'> | null> => {
        return await this.implementation.login(params);
    }
}