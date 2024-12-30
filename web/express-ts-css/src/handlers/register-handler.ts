import type { Handler, Request } from "express";

import type { IUserService } from "@complex-app/lib-services";

import type { RegisterUserDTO } from "../register/register-user-dto.js";
import { genSalt, hash } from "bcrypt";

export const registerHandler = ({ userService }: { userService: IUserService }): Handler => {
    return async (req: Request<{ [key: string]: any }, any, RegisterUserDTO, { [key: string]: any }, Record<string, any>>, res) => {
        const { username, email, password } = req.body;

        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        const createdUser = await userService.register({ username, email, password: hashedPassword });
        if (createdUser == null) {
            res.status(500).json({ success: false, message: 'Unable to register user!' });
            return;
        }

        res.status(201).json({ success: true, message: 'Successfully registered user!' });
    }
}