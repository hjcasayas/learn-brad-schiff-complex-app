import type { Handler } from "express";
import * as bcrypt from "bcrypt";

import { RegisterUserDTO } from "./register-user-dto.js";
import { registerUserValidator } from "./register-user-validator.js";

export const registerUserMiddleware: Handler = async (req, res, next) => {
    const registerUserDTO = new RegisterUserDTO(req.body);
    const errors = registerUserValidator(registerUserDTO);

    if (errors != null && errors.length > 0) {
        res.status(400).json({ data: null, errors });
        return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(registerUserDTO.password, salt);

    req.body = { ...registerUserDTO, password: hashedPassword };
    next();
}