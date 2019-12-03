import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Sanderson',
        email: 'correasanderson@gmail.com',
        password_hash: 'qwerty123',
    });
    return res.json(user);
});

export default routes;
