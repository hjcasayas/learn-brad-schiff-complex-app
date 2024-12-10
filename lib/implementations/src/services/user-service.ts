import type { IUserRepository, UserEntity } from "@complex-app/lib-repositories";
import type { IUserService, UserModel } from "@complex-app/lib-services";

export class UserServiceImpl implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    register = async (userModel: UserModel): Promise<void> => {
        const user: UserEntity = { ...userModel, createdDate: new Date(), updatedDate: new Date() };
        await this.userRepository.add(user);
    }
}