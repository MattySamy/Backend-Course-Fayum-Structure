import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
<<<<<<< HEAD
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
=======
export function register(req, res) {
	const { name, email, password, age } = req.body;
	if (Users.some((user) => user.email === email)) {
		return res.status(400).json({ message: 'Email already exists' });
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
	return res.json({
		message: 'User registered succesfully',
		data: user,
	});
}
>>>>>>> 472a869abe46a3611e29192068c1ab8eaa2f8a43
