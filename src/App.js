import { useState } from 'react';
import Bookshelf from './views/Bookshelf';
import AddBookForm from './components/AddBookForm';
import { styles } from './styles';

const App = () => {
  const [formView, toggleFormView] = useState(false);

  return (
    <div style={styles.AppRoot}>
      {!formView ? (
        <Bookshelf toggleFormView={toggleFormView} />
      ) : (
        <AddBookForm toggleFormView={toggleFormView} />
      )}
    </div>
  );
};

export default App;
