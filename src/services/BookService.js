import axios from 'axios';
import { validateBookObj } from './util';

const BOOKDATA_BASE_URL =
  'https://us-central1-all-turtles-interview.cloudfunctions.net';
const BOOKS_ENDPOINT = '/books';
const AUTH_HEADERS = {
  Authorization: 'katiefedoseeva'
};

/** 
 * Async axios GET request that fetches all books.
 * @returns {Object[]} - ex: 
[
  {
    "id": String,
    "description": String,
    "imageUrl": String,
    "author": String,
    "title": String
  }
]
 */
export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${BOOKDATA_BASE_URL}${BOOKS_ENDPOINT}`, {
      headers: AUTH_HEADERS
    });

    return response.data;
  } catch (error) {
    return [];
  }
};

/** 
Async axios POST request that adds new book to the bookshelf
@param {Object} bookObj consists of the following structure:
{
  "description": String,
  "imageUrl": String,
  "author": String,
  "title": String
}
@returns {Object[]} updated list of books or an empty array.
*/

export const saveBook = async bookObj => {
  const validBookObj = validateBookObj(bookObj);

  if (!validBookObj) {
    return [];
  }

  if (validBookObj) {
    try {
      const response = await axios.post(
        `${BOOKDATA_BASE_URL}${BOOKS_ENDPOINT}`,
        validBookObj,
        { headers: AUTH_HEADERS }
      );

      return response.data;
    } catch (error) {
      return [];
    }
  }
};

/** Async axios request that deletes a book
@param {String} bookId - ID of the  book to delete
@returns {Object[]} - updated list of books or an empty array.
*/
export const deleteBook = async bookId => {
  if (!bookId) {
    return [];
  }

  try {
    const response = await axios.delete(
      `${BOOKDATA_BASE_URL}${BOOKS_ENDPOINT}/${bookId}`,
      {
        headers: AUTH_HEADERS
      }
    );

    return response.data;
  } catch (error) {
    return [];
  }
};
