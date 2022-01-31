import { Favorites } from '../Favorites';
import { ULList, LIList, FavoriteButton, SideDiv, DateDiv } from './styles';
import api from '../../services/AdonisApi'
import { format, parseISO } from 'date-fns'


interface BookListProps {
  list: FavoriteBooks[]
  setReload: any 
}

interface FavoriteBooks {
  id: string;
  title: string;
  authors: string;
  publisher: string;
  description: string;
  imagelinks: string;
  created_at: string;
}


export function FavoriteBooks(props: BookListProps) {

  const { list } = props;

  async function deleteFavorite(item: FavoriteBooks) {
    const id = item.id;
    const reload = props.setReload;

    try{

      await api.delete(`books/${id}`)
      alert('Livro removido dos favoritos.')
      reload(true)
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <ULList>
      {
        list?.length === 0
          ? <p>Nenhum livro</p>
          : list.map(item => {
            return (
              <LIList key={item.id}>
                <Favorites item={item} />
                <SideDiv>
                  <FavoriteButton type='button' onClick={() => deleteFavorite(item)}>Remover dos favoritos</FavoriteButton>
                  <DateDiv>
                    <span>Adicionado em:</span>
                    <span>{format(parseISO(item.created_at), 'dd/MM/yyyy - HH:mm')}</span>
                  </DateDiv>
                </SideDiv>
              </LIList>
            )
          })}

    </ULList>
  )
}

