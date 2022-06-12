import axios from 'axios';

const BOOKDATA_BASE_URL =
  'https://us-central1-all-turtles-interview.cloudfunctions.net';
const BOOKS_ENDPOINT = '/books';
const AUTH_HEADERS = {
  Authorization: 'katiefedoseeva'
};

/** async axios request that fetches all books
@returns {Object[]} - ex: 
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

    console.log('response  ', response);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return error.message;
  }
};

/** 
Async axios request that adds new book to the bookshelf
@param {Object} bookObj with the following values:
{
  "description": String,
  "imageUrl": String,
  "author": String,
  "title": String
}
@returns {Object[]} updated list of books
*/

export const saveBook = async bookObj => {
  try {
    const response = await axios.post(
      `${BOOKDATA_BASE_URL}${BOOKS_ENDPOINT}`,
      bookObj,
      { headers: AUTH_HEADERS }
    );

    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return error.message;
  }
};

/** Async axios request that deletes a book
@param {String} bookId - ID of the  book to delete
@returns {Object[]} - updated list of books
*/
export const deleteBook = async bookId => {
  try {
    const response = await axios.delete(
      `${BOOKDATA_BASE_URL}${BOOKS_ENDPOINT}/${bookId}`,
      {
        headers: AUTH_HEADERS
      }
    );

    console.log('response  ', response.data);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return error.message;
  }
};
