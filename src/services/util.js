/**
 * Util function to validate that all required bookObj params are present.
 * @param {Object} bookObj
 * @returns {Boolean} true if all fields are present, false if not.
 */
export const validateBookObj = bookObj => {
  if (!bookObj) {
    return false;
  }

  // only the author and title fields are required.
  if (!bookObj.author || !bookObj.title) {
    return false;
  }

  return true;
};
