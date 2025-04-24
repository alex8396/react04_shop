import React, { useState } from 'react'
import css from './ShopPage.module.css'
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import Pagination from '@/components/Pagination'
import CategoryButton from '@/components/CategoryButton'
import SortItem from '@/components/SortItem'

const ShopPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [isDown, setIsDown] = useState(false)
  const initProductsData = useLoaderData()
  const cuurentCategory = searchParams.get('category')
  const sortCase = searchParams.get('_sort')

  const data = initProductsData.products.data
  const { per_page } = initProductsData

  const handleCategoryFilter = category => {
    const params = new URLSearchParams(searchParams) // 현재 파라미터 정보 유지
    params.set('_page', 1) // 페이지를 1로 초기화
    params.set('_per_page', per_page) // 페이지당 상품 수를 설정
    category ? params.set('category', category) : params.delete('category') // 카테고리 필터링
    navigate(`/shop/?${params}`) // URL 변경
  }

  const handleSort = sortOption => {
    const params = new URLSearchParams(searchParams)
    params.set('_page', 1)
    params.set('_sort', sortOption)
    setIsDown(false)
    navigate(`/shop/?${params}`)
  }

  const sortTextMap = {
    id: '등록순',
    price: '낮은 가격순',
    '-price': '높은 가격순',
    discount: '낮은 할인순',
    '-discount': '높은 할인순',
  }

  const getSortText = () => {
    return sortTextMap[sortCase] || '등록순'
  }

  const sortOptions = [
    { option: 'id', label: '등록순' },
    { option: 'price', label: '낮은 가격순' },
    { option: '-price', label: '높은 가격순' },
    { option: 'discount', label: '낮은 할인순' },
    { option: '-discount', label: '높은 할인순' },
  ]
  const categories = [
    { id: '', label: '전체상품' },
    { id: 'new', label: '신상품(new)' },
    { id: 'top', label: '인기상품(top)' },
  ]
  return (
    <main className={css.shopPage}>
      <h2>Shop All</h2>
      <div className={css.searchFn}>
        <div className={css.category}>
          {categories.map(cate => (
            <CategoryButton
              key={cate.id}
              cate={cate.id}
              handleCategoryFilter={handleCategoryFilter}
              cuurentCategory={cuurentCategory === null && cate.id === '' ? null : cuurentCategory}
              label={cate.label}
            />
          ))}
        </div>
        <div className={`${css.sort} ${isDown ? css.active : ''}`}>
          <div className={css.sortHeader} onClick={() => setIsDown(!isDown)}>
            <p>{getSortText()}</p>
            <i className={`bi bi-chevron-${isDown ? 'up' : 'down'}`}></i>
          </div>
          <ul>
            {sortOptions.map(sortOpt => (
              <SortItem
                key={sortOpt.option}
                option={sortOpt.option}
                handleSort={handleSort}
                currentSort={sortCase}
                label={sortOpt.label}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={css.productList}>
        <ul className={css.list}>
          {data.map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ul>
        <Pagination initProductsData={initProductsData} />
      </div>
    </main>
  )
}

export default ShopPage
