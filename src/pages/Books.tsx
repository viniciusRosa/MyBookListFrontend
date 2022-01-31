import React, { useState, useEffect } from 'react';
import { BookList } from '../components/BookList';
import { SearchBar } from '../components/SearchBar';
import api from '../services/SearchBooksApi';
import { MainContainer } from '../components/MainContainer';
import { NavBar } from '../components/NavBar';
import Pagination from '../components/pagination';

interface Item {
    id: string
    volumeInfo: any
  }
  
  interface IBook {
  
    title: string;
    authors: string;
    publisher: string;
    description: string;
    imageLinks: {
      thumbnail: string
    }
  }

const Books: React.FC = () => {

  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState<Item[]>([]);
  const [maxResults, setMaxResults] = useState(10); //items per page
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [startIndex, setStartIndex] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [pages, setPages] = useState(0)

  useEffect(() => {

    async function loadBooks() {
      if (query.length > 2) {
        const response = await api.get(`${query}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=relevance`);
        setTotalItems(response.data.totalItems);
        setPages(Math.ceil(response.data.totalItems / maxResults));
        setCurrentPage(startIndex ? (startIndex / maxResults) + 1: 1);
        setBookList(response.data.items);
        console.log(bookList)
      }
    }
    loadBooks()

  }, [query, startIndex])


  useEffect(() => {
    setStartIndex(0)
  }, [query])

    return (
        <MainContainer>

        <NavBar />
  
        <SearchBar setQuery={setQuery} />
  
        <BookList list={bookList} />
  
        <div>
          {currentPage ? 
          <Pagination 
            maxResults={maxResults}
            pages={pages}
            currentPage={currentPage}
            setStartIndex={setStartIndex} />  : '' }    
        </div>
          
      </MainContainer>
    );
  }
  
  export default Books;
  