import React, { useState, useEffect } from 'react';
import { Book } from '../Book';
import { ULList, LIList, FavoriteButton } from './styles';
import api from '../../services/AdonisApi'


export interface BookListProps {
  list?: Item[]
}

export interface Item {
  id: string;
  volumeInfo: IBook;
}

export interface IBook {

  title: string;
  authors: string;
  publisher: string;
  description: string;
  imageLinks: {
    thumbnail: string
  }

}

export function BookList(props: BookListProps) {



  async function sendToFavorite(item: Item) {
    const id = item.id;
    const title = item.volumeInfo.title;
    const authors = item.volumeInfo.authors;
    const publisher = item.volumeInfo.publisher;
    const description = item.volumeInfo.description;
    const imagelinks = item.volumeInfo.imageLinks.thumbnail;

    try{

      await api.post('books', {
        id,
        title,
        authors,
        publisher,
        description,
        imagelinks
      })

      alert('Livro salvo nos favoritos.')
  
    }catch(err) {
      console.log(err);
    }
  }


  return (
    <ULList>
      {
        props.list?.length === 0
          ? <p>Nenhum livro</p>
          : props.list?.map(item => {
            return (
              <LIList key={item.id}>
                <Book item={item} />
                <FavoriteButton type='button' onClick={() => sendToFavorite(item)}>Adicionar nos favoritos</FavoriteButton>
              </LIList>
            )
          })}

    </ULList>
  )
}

