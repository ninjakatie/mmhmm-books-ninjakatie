/**
 * Truncates the description body to ensure it fits into the card view.
 * @param {String} description
 * @returns {String} shortened text
 */

const formatDescriptionText = description => {
  if (!description) {
    return '';
  }

  if (description.length > 465) {
    const shortenedText = description.slice(0, 465).concat('...');

    return shortenedText;
  }
};

export default formatDescriptionText;
