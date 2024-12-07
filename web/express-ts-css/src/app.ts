import express from 'express'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const createExpressApp = () => {
    const app = express();
    app.set('views', path.resolve(path.dirname(fileURLToPath(import.meta.url)), './views'));
    app.set('view engine', 'ejs')
    app.get('/', (req, res) => {
        res.render('home-guest.ejs');
    });

    return app;
}