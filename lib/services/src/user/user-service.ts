import type { IUserRepository, UserEntity } from "@complex-app/lib-repositories";
import type { IUserService, UserModel } from "@complex-app/lib-services";

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    register = async (userModel: UserModel): Promise<Omit<UserModel, 'password'> | null> => {
        const user: UserEntity = { ...userModel, createdDate: new Date(), updatedDate: new Date() };
        const createdUser = await this.userRepository.add(user);

        if (createdUser == null) {
            return null;
        }

        return { username: createdUser.username, email: createdUser.email };
    }

    login = async ({ username }: { username: string; password: string; }): Promise<UserModel | null> => {
        const user = await this.userRepository.getByUsername({ username });

        if (user == null) {
            return null;
        }

        return { username: user.username, email: user.email, password: user.password };
    }
}