import TrashIcon from '../assets/icons/trashcan.png';

const BookPlaceholderCoverImg = 'https://picsum.photos/125/200';

const BookContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '601px',
  height: '230px',
  background: '#ffffff',
  borderRadius: '8px',
  border: '1px solid #F1F1F1'
};

const Book = bookData => {
  const { id, description, imageUrl, author, title } = bookData;

  return (
    <div style={BookContainer}>
      <div style={{ margin: '15px' }}>
        <img
          src={BookPlaceholderCoverImg}
          alt='book cover'
          width='125px'
          height='200px'
        />
      </div>
      <div style={{ margin: '15px auto 15px 0px' }}>
        <div>Book Name</div>
        <div>Author</div>
        <div>Book Description</div>
      </div>
      <div style={{ margin: '15px 15px 15px auto' }}>
        <img src={TrashIcon} alt='delete book' height='21px' width='21px' />
      </div>
    </div>
  );
};

export default Book;
