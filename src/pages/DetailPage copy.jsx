import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const DetailPage = () => {
  const { productId } = useParams()
  console.log(`productId`, productId)
  const test = useParams()
  console.log('test--', test)

  const product = useLoaderData()
  console.log('p----', product.img)
  return (
    <main>
      <h2>DetailPage</h2>
    </main>
  )
}

export default DetailPage
