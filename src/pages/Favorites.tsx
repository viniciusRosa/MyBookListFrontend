import { useEffect, useState } from "react";
import { FavoriteBooks } from "../components/FavoriteBooks";
import { MainContainer } from "../components/MainContainer";
import { NavBar } from "../components/NavBar";
import Pagination from "../components/pagination";
import api from '../services/AdonisApi';

const Favorites: React.FC = () => {

  const [favoriteList, setVaforiteList] = useState<[]>([]);
  const [maxResults, setMaxResults] = useState(10); //items per page
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0)
  const [reload, setReload] = useState(false)


  useEffect(() => {

    async function loadFavoriteBooks() {
      const response = await api.get(`books/?page=${currentPage}`);
      setMaxResults(response.data.meta.per_page);
      setPages(response.data.meta.last_page)
      setCurrentPage(response.data.meta.current_page)
      setVaforiteList(response.data.data)
      setReload(false)
    }

    loadFavoriteBooks()

  }, [reload])

console.log(favoriteList)

  return (
    <MainContainer>

      <NavBar />

      <FavoriteBooks list={favoriteList} setReload={setReload} />

      <Pagination 
        maxResults={maxResults} 
        pages={pages} 
        currentPage={currentPage}
        setStartIndex={setStartIndex}/>
      
    </MainContainer>
  );
}

export default Favorites;
