import { Router } from "express";
import { homeHandler } from "./handlers/home-handler.js";
import { registerHandler } from "./handlers/register-handler.js";

export const createRouter = () => {
    const router = Router();
    
    router.get('/', homeHandler());
    router.post('/register', registerHandler());

    return router;
}


