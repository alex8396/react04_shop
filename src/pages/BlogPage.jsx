import React from 'react'
import { useSelector } from 'react-redux'

const BlogPage = () => {
  const countData = useSelector(state => state.counter)
  const { count, label } = countData
  console.log('countData---', countData)
  return (
    <main>
      <h2>BlogPage</h2>
      <p>
        {label}:{count}
      </p>
      <button>증가하기</button>
    </main>
  )
}

export default BlogPage
