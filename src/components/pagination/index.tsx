import { UlPagination, LiPagination, ButtonPagination } from './styles'

interface PaginationProps {
  maxResults: number;
  pages: number;
  currentPage: number;
  setStartIndex: (num: number) => void
}

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ maxResults, pages, currentPage, setStartIndex }: PaginationProps) => {

  const first = Math.max(currentPage - MAX_LEFT, 1)

  function onPageChange(page: number) {
    setStartIndex((page - 1) * maxResults)
    window.scrollTo(0, 0);
  }

  return (
    <UlPagination>
      <LiPagination>
        <ButtonPagination
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </ButtonPagination>
      </LiPagination>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <LiPagination key={page}>
            <ButtonPagination
              onClick={() => onPageChange(page)}
            >
              {page}
            </ButtonPagination>
          </LiPagination>
        ))
      }
      <LiPagination>
        <ButtonPagination
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pages}
        >
          Proximo
        </ButtonPagination>
      </LiPagination>
    </UlPagination>
  )
}

export default Pagination;