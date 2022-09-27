import Books from '../../helpers/db/books.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function getBooks(req, res) {
    try {
        return okResponse(res, 'Books fetched successfully', Books);
    } catch (error) {
        return badRequestResponse(res, error.message);
    }
}