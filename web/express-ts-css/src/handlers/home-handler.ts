import type { Handler } from "express";
import type { LoginRequest } from "../types.js";

export const homeHandler = (): Handler => {
    return (req: LoginRequest, res) => {

        if (req.session.user != null) {
            res.render('home-dashboard', { username: req.session.user.username });
            return;
        }

        res.render('home-guest');
    }
}