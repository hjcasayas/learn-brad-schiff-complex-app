import { Router } from "express";
import { homeHandler } from "./handlers/home-handler.js";
import { registerHandler } from "./handlers/register-handler.js";
import { registerUserMiddleware } from "./middlewares/register-user.js";
import type { IUserService } from "@complex-app/lib-services";

export const createRouter = ({userService}: {userService: IUserService}) => {
    const router = Router();
    
    router.get('/', homeHandler());
    router.post('/register', registerUserMiddleware, registerHandler({userService}));

    return router;
}


