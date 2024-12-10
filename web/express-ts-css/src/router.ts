import { Router } from "express";
import { homeHandler } from "./handlers/home-handler.js";
import { registerHandler } from "./handlers/register-handler.js";
import { registerUserMiddleware } from "./middlewares/register-user.js";

export const createRouter = () => {
    const router = Router();
    
    router.get('/', homeHandler());
    router.post('/register', registerUserMiddleware, registerHandler());

    return router;
}


