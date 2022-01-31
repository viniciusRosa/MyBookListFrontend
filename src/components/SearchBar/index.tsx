import { Container, SearchInput } from './styles'

export function SearchBar({setQuery}: any) {

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder='Buscar livro'
        onChange={event => setQuery(event.target.value)}
      />
    </Container>
  )
}
