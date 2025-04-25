import React from 'react'
import css from './Pagination.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Pagination = ({ initProductsData }) => {
  console.log('-----', initProductsData)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { first, last, prev, next, pages} = initProductsData.products
  const currentPage = Number(searchParams.get('_page') || '1')
  console.log('currentPage', currentPage)

  const handlePageChange = page => {
    const params = new URLSearchParams(searchParams) // 현재 파라미터 정보 위치
    params.set('_page', page) // 페에지를 1로 초기화
    navigate(`/Shop/?${params}`)
  }

  const getPageNumbers = () => {
    // 한번에 보여주는 최대 페이지 번호 수
    const maxPageNumbers = 10
    // 전체 페이지가 최대 페이지 보다 작으면 모든 페이지 번호 표시
    if (pages > maxPageNumbers) {
      return Array.from({ length: maxPageNumbers }, (_, i) => i + 1)
    }

    // 페이지가 많을 경우 현재 페이지 번호를 기준으로 주변 번호 생성
    // 예) 현재 페이지 15 => 10~20까지 보여줌
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2))
    let endPage = Math.min(pages, startPage + maxPageNumbers - 1)

    // endPage가 pages보다 작을 경우 startPage 조정
    if (endPage > pages) {
      endPage = pages
      startPage = Math.max(1, endPage - maxPageNumbers + 1)
    }
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

  const pageNumbers = getPageNumbers()
  console.log('pageNumbers', pageNumbers)

  return (
    <div className={css.paginationArea}>
      <button
        onClick={() => {
          handlePageChange(first)
        }}
        disabled={currentPage === first}
        className={currentPage === first ? css.disabled : ''}
      >
        처음으로 이동
      </button>
      <button
        onClick={() => {
          handlePageChange(prev)
        }}
        disabled={prev === null || currentPage === first}
        className={currentPage === first ? css.disabled : ''}
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      {pageNumbers.map(num => (
        <button
          key={num}
          onClick={() => {
            handlePageChange(num)
          }}
          className={num === currentPage ? css.active : ''}
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => {
          handlePageChange(next)
        }}
        disabled={next === null || currentPage === last}
        className={currentPage === last ? css.disabled : ''}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
      <button onClick={() => {handlePageChange(last)}}>마지막 페이지로 이동</button>
    </div>
  )
}

export default Pagination
