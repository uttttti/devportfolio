import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Menu from './Menu/Menu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './App.scss';
import Jumbotron from './Jumbotron/Jumbotron';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BA68C8',
      contrastText: '#F3E5F5'
    },
    secondary: {
      main: '#EEE',
      contrastText: '#BA68C8'
    },
    text: {
      primary: '#453B47'
    }
  }
});

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app" data-testid="App">
          <div className="bg-img"></div>
          <Menu />
          <Jumbotron />
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
    </ThemeProvider>
  );
};

export default App;
