import { Router } from "express";

import type { IUserService } from "@complex-app/lib-services";

import { homeHandler } from "./handlers/home-handler.js";
import { registerHandler } from "./handlers/register-handler.js";
import { registerUserMiddleware } from "./register/register-user-middleware.js";
import { loginHandler } from "./handlers/login-handler.js";
import { logoutHandler } from "./handlers/logout-handler.js";

export const createRouter = ({ userService }: { userService: IUserService }) => {
    const router = Router();

    router.get('/', homeHandler());
    router.post('/register', registerUserMiddleware, registerHandler({ userService }));
    router.post('/login', loginHandler({ userService }));
    router.post('/logout', logoutHandler());

    return router;
}


