import type { IUserService } from "@complex-app/lib-services";
import type { Handler } from "express";
import { UserValidator } from "../validators/user.js";

export const registerHandler = ({ userService }: { userService: IUserService }): Handler => {
    return async (req, res) => {
        const userValidator = new UserValidator(req.body);
        const { user } = userValidator.getUser();
        if (user != null) {
            await userService.register(user);
            res.status(201).json({ message: 'Successfully created user!' });
        } else {
            res.status(400).json({ message: 'Something went wrong!' });
        }
    }
}