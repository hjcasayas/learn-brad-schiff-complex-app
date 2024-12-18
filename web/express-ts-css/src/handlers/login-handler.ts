import type { IUserService } from "@complex-app/lib-services";
import { compare } from "bcrypt";
import type { Handler } from "express";

export const loginHandler = ({ userService }: { userService: IUserService }): Handler => {
    return async (req, res) => {
        const user = await userService.login(req.body);

        if (user == null) {
            res.status(404).json({ success: false, message: 'Either the username or password is incorrect!' });
            return;
        }

        const isPasswordCorrect = await compare(user.password, req.body.password);

        if (!isPasswordCorrect) {
            res.status(404).json({ success: false, message: 'Either the username or password is incorrect!' });
            return;
        }

        res.status(200).json({ success: true, message: 'Successfully logged in!' });
    }
}