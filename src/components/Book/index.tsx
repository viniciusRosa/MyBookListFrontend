import { Title, Author, Publisher, Description } from './styles';
import api from '../../services/AdonisApi'
  
export function Book({item}: any) {

  return (
    <div>
      <Title>{item.volumeInfo.title}</Title>
      <Author>{item.volumeInfo.authors}</Author>
      <Publisher>
        <span>Editora:</span><span>{item.volumeInfo.publisher}</span>
      </Publisher>
      <Description>{item.volumeInfo.description}</Description>
    </div>
  )
}

