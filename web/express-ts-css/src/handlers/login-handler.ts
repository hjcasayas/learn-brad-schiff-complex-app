import type { IUserService } from "@complex-app/lib-services";
import type { Handler } from "express";

export const loginHandler = ({ userService }: { userService: IUserService }): Handler => {
    return async (req, res) => {
            await userService.login(req.body);
            res.status(200).json({ message: 'Successfully logged in!' });
    }
}