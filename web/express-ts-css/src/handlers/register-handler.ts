import type { Handler } from "express";

export const registerHandler = (): Handler => {
    return (req, res) => {
        res.send('Regiter works!');
    }
}