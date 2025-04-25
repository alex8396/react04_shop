import axios from 'axios'
// const BASE_URL = 'http://localhost:3000/products'

export const getProductsData = async (query = '') => {
  try {
    const res = await axios.get(`/api/products/?${query}`)
    //console.log('productApi.js : getProductsData', res)
    return res.data
  } catch (err) {
    console.log('productApi.js : getProductsData -err', err)
    // throw err
  }
}

export const getProductById = async id => {
  try {
    const res = await axios.get(`/api/products/${id}`)
    console.log('productApi.js : getProductById', res)
    return res.data
  } catch (err) {
    console.log('productApi.js : getProductById - err', err)
    // throw err
  }
}

export const getProductsByCategory = async (category, limit = 10) => {
  try {
    const res = await axios.get(`/api/products/`, {
      params: {
        category,
        _limit: limit,
      },
    })
    return res.data
  } catch (err) {
    console.log('err----', err)
    return []
  }
}