import type { Handler } from "express";
import type { LoginRequest } from "../types.js";

export const logoutHandler = (): Handler => {
    return async (req: LoginRequest, res) => {
        req.session.destroy((error) => console.log({ error }));
        res.status(200).redirect('/');
    }
}