import type { Handler } from "express";
import { compare } from "bcrypt";

import type { IUserService } from "@complex-app/lib-services";
import type { LoginRequest } from "../types.js";

export const loginHandler = ({ userService }: { userService: IUserService }): Handler => {
    return async (req: LoginRequest, res) => {
        const user = await userService.login(req.body);

        if (user == null) {
            // TODO: logger
            console.log('No user found with username: ', req.body.username);
            res.status(400).json({ success: false, message: 'Either the username or password is incorrect!' });
            return;
        }

        const isPasswordCorrect = await compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            // TODO: logger
            console.log('Wrong password for username: ', req.body.username);
            res.status(400).json({ success: false, message: 'Either the username or password is incorrect!' });
            return;
        }

        req.session.save((error) => {
            if (error != null) {
                // TODO: logger
                console.log('Session saving error: ', error);
                throw error;
            }

            req.session.user = { username: user.username, email: user.email };
            res.status(200).redirect('/');
        });
    }
}