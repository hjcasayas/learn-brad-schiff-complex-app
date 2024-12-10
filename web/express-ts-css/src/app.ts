import express from 'express'
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRouter } from './router.js';
import type { IUserService } from '@complex-app/lib-services';

export const createExpressApp = (dependencies: { userService: IUserService }) => {
    const app = express();

    app.set('views', path.resolve(path.dirname(fileURLToPath(import.meta.url)), './views'));
    app.set('view engine', 'ejs');

    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), './public')))
    app.use('/', createRouter(dependencies));

    return app;
}