import type { IUserService } from "@complex-app/lib-interfaces";

export class UserService<UserDTO> implements IUserService<UserDTO> {

    constructor(private userService: IUserService<UserDTO>) {

    }

    register = async (userDTO: UserDTO): Promise<void> => {
        return await this.userService.register(userDTO);
    }
}