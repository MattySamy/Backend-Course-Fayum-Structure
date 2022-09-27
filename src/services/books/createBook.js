import Books from '../../helpers/db/books.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function createBook(req, res) {
    try {
        let { title, description, publishedAt, authorName } = req.body;
        if (!title || !description || !publishedAt || !authorName) {
            return badRequestResponse(res, `Missing required fields, Required fields: ${
			!title ? 'title, ' : ''
		}${!description ? 'description, ' : ''}${
			!publishedAt ? 'publishedAt, ' : ''
		}${!authorName ? 'authorName' : ''}`, );
        }
        publishedAt = parseInt(publishedAt);
        if (isNaN(publishedAt)) {
            return badRequestResponse(res, 'the Publish Year must be a number');
        }
        const book = {
            id: Books.length + 1,
            title,
            description,
            publishedAt,
            authorName,
        };
        Books.push(book);
        return okResponse(res, 'Book created successfully', book);
    } catch (error) {
        return badRequestResponse(res, error.message);
    }
}