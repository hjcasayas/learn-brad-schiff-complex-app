import type { Handler } from "express";

export const homeHandler = (): Handler => {
    return (req, res) => {
        res.render('home-guest.ejs');
    }
}