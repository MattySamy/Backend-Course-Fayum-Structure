import Users from '../../helpers/db/users.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function getUsers(req, res) {
    try {
        return okResponse(res, 'Users fetched successfully', Users);
    } catch (error) {
        return badRequestResponse(res, error.message);
    }
}