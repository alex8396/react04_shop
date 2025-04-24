import React from 'react'
import css from './SortItem.module.css'
const SortItem = ({ option, handleSort, currentSort, label }) => {
  // currentSort가 없거나 null이면 'id'를 기본값으로 사용
  const isActive = currentSort === option || (!currentSort && option === 'id')

  return (
    <li
      onClick={() => {
        handleSort(option)
      }}
      className={isActive ? `${css.active} ${css.list}` : `${css.list}`}
    >
      {label}
    </li>
  )
}

export default SortItem
