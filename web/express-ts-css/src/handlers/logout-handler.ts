import type { Handler } from "express";
import type { LoginRequest } from "../types.js";

export const logoutHandler = (): Handler => {
    return (req: LoginRequest, res) => {
        req.session.destroy((error) => {
            if (error != null) {
                //TODO: Add logs for the error
                console.log('Session destroy error: ', error);
                throw error;
            }

            res.status(200).redirect('/');
        });
    }
}