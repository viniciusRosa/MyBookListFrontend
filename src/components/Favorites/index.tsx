import { Title, Author, Publisher, Description } from './styles';
  
export function Favorites({item}: any) {

  return (
    <div>
      <Title>{item.title}</Title>
      <Author>{item.authors.slice(1, -2).replace('"', ' ')}</Author>
      <Publisher>
        <span>Editora:</span><span>{item.publisher}</span>
      </Publisher>
      <Description>{item.description}</Description>
    </div>
  )
}

