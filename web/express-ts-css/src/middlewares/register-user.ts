import type { Handler } from "express";
import { UserValidator } from "../validators/user.js";

export const registerUserMiddleware: Handler = (req, res, next) => {
    const userValidator = new UserValidator(req.body);
    const { errors } = userValidator.getUser();
    
    if (errors != null && errors.length > 0) {
        res.status(400).json({ data: null, errors });
        return;
    }

    next();
}