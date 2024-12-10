import type { UserModel, IUserService } from "@user/index.js";

export class UserService implements IUserService {

    constructor(private implementation: IUserService) { }

    register = async (user: UserModel): Promise<void> => {
        return await this.implementation.register(user);
    }
}