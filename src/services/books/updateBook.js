import Books from '../../helpers/db/books.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function updateBook(req, res) {
    try {
        const { id } = req.params;
        const bookIndex = Books.findIndex((book) => book.id === parseInt(id));
        if (bookIndex === -1) {
            return badRequestResponse(res, 'Book not found');
        }
        let { title, description, publishedAt, authorName } = req.body;
        if (!title && !description && !publishedAt && !authorName) {
            return badRequestResponse(res, `Missing required fields, Required fields: ${
			!title ? 'title, ' : ''
		}${!description ? 'description, ' : ''}${
			!publishedAt ? 'publishedAt, ' : ''
		}${!authorName ? 'authorName' : ''}`, );
        }
        if (publishedAt) {
            publishedAt = parseInt(publishedAt);
            if (isNaN(publishedAt)) {
                return badRequestResponse(res, 'the Publish Year must be a number');
            }
        }
        Books[bookIndex] = {
            ...Books[bookIndex],
            title: title || Books[bookIndex].title,
            description: description || Books[bookIndex].description,
            publishedAt: publishedAt || Books[bookIndex].publishedAt,
            authorName: authorName || Books[bookIndex].authorName,
        };
        return okResponse(res, 'Book updated successfully', Books[bookIndex]);
    } catch (error) {
        return badRequestResponse(res, error.message);
    }
}