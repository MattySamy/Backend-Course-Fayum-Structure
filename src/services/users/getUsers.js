import Users from '../../helpers/db/users.db.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function getUsers(req, res, next) {
    try {
        return okResponse(res, 'Users fetched successfully', Users);
    } catch (error) {
        next(error);
    }
}