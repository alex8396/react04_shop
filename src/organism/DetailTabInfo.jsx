import React, { useState } from 'react'
import css from './DetailTabInfo.module.css'

const DetailTabInfo = () => {
  const [activeTab, setActive] = useState(0)
  const tabTiles = ['메뉴1', '메뉴2', '메뉴3']
  return (
    <>
      <div className={css.tabBtn}>
        {tabTiles.map((title, i) => (
          <button
            key={i}
            className={activeTab === i ? css.active : ''}
            onClick={() => setActive(i)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={`${css.tabContent} ${activeTab === 0 ? css.visible : ''}`}>
        <h3>제목1</h3>
        <p>내용이 들어갑니다.</p>
        <a href="#">test1</a>
        <p>내용이 들어갑니다.</p>
        <p>내용이 들어갑니다.</p>
        <p>내용이 들어갑니다.</p>
      </div>
      <div className={`${css.tabContent} ${activeTab === 1 ? css.visible : ''}`}>
        <h3>제목1</h3>
        <p>내용이 들어갑니다.</p>
        <p>내용이 들어갑니다.</p>
        <p>내용이 들어갑니다.</p>
        <p>내용이 들어갑니다.</p>
        <a href="#">test2</a>
      </div>
      <div className={`${css.tabContent} ${activeTab === 2 ? css.visible : ''}`}>
        <h3>제목1</h3>
        <p>내용이 들어갑니다.</p>
        <p>내용이 들어갑니다.</p>
        <p>내용이 들어갑니다.</p>
        <p>내용이 들어갑니다.</p>
      </div>
    </>
  )
}

export default React.memo(DetailTabInfo)
