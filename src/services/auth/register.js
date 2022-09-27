import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function register(req, res) {
    try {
        const { name, email, password, age } = req.body;
        if (Users.some((user) => user.email === email)) {
            return badRequestResponse(res, 'User already registered');
        }
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const user = {
            id: Users.length + 1,
            name,
            email,
            password: encryptedPassword,
            age,
        };
        Users.push(user);
        return okResponse(res, 'User registered successfully', user);
    } catch (error) {
        return badRequestResponse(res, error.message);
    }
}