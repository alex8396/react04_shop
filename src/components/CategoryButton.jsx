import React from 'react'
import css from './CategoryButton.module.css'

const CategoryButton = ({ cate, label, handleCategoryFilter, cuurentCategory }) => {
  // 추가
  const isActive = (cate === '' && cuurentCategory === null) || cate === cuurentCategory

  return (
    <button
      onClick={() => {
        handleCategoryFilter(cate)
      }}
      className={isActive ? `${css.active} ${css.btn}` : `${css.btn}`}
    >
      {label}
    </button>
  )
}

export default CategoryButton
