import express from 'express'
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRouter } from './router.js';
import type { IUserService } from '@complex-app/lib-services';
import session from 'express-session';
import MongoStore from 'connect-mongo';

export const createExpressApp = (dependencies: { userService: IUserService }) => {
    const app = express();

    app.set('views', path.resolve(path.dirname(fileURLToPath(import.meta.url)), './views'));
    app.set('view engine', 'ejs');

    app.use(session({
        secret: process.env.SESSION_SECRET as string,
        store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, sameSite: 'strict' }
    }));
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), './public')))
    app.use('/', createRouter(dependencies));

    return app;
}