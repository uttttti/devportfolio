import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Menu from './Menu/Menu';
import './App.scss';

interface Book {
  id: string;
  name: string;
  locations: string[];
}

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('/api/books')
      .then((res: AxiosResponse<Book[]>) => setBooks(res.data))
      .catch(console.error); // TODO エラー処理
  }, []);

  return (
    <div className="app" data-testid="App">
      <Menu />
      {books.map((book: Book) => (
        <div key={book.id} className='book-item'>
          <div className='book-id'>{book.id}</div>
          <div className='book-name'>{book.name}</div>
          <div className='book-locations'>{book.locations.join(', ')}</div>
          <p className="content-box"> 
            contentBox
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
