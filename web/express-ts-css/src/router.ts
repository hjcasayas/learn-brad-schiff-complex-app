import { Router } from "express";

import type { IUserService } from "@complex-app/lib-services";

import { homeHandler } from "./handlers/home-handler.js";
import { registerHandler } from "./handlers/register-handler.js";
import { registerUserMiddleware } from "./register/register-user-middleware.js";

export const createRouter = ({userService}: {userService: IUserService}) => {
    const router = Router();
    
    router.get('/', homeHandler());
    router.post('/register', registerUserMiddleware, registerHandler({userService}));

    return router;
}


