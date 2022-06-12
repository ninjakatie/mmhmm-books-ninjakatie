import { validateBookObj } from './util';

test('The required fields are present', () => {
  const bookObj = {
    title: 'Harry Potter',
    author: 'J. K. Rowling'
  };

  expect(validateBookObj(bookObj)).toBe(true);
});

test('The required fields are missing', () => {
  const bookObj = {
    title: 'Harry Potter',
    description: 'Books by J. K. Rowling'
  };

  expect(validateBookObj(bookObj)).toBe(false);
});
