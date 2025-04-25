import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import css from './CartPage.module.css'
import { formatCurrency } from '../utils/features'
import { removeFromCart, updateCartItem } from '@/api/cartApi'

const CartPage = () => {
  const cartList = useLoaderData()
  const [items, setItems] = useState(Array.isArray(cartList) ? cartList : [])
  console.log('cartList', items)

  // 장바구니 총 수량 계산 reduce 고차함수
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
  // 총 계산할 금액
  const totalSum = items.reduce(
    (sum, item) => sum + Math.round(item.price * item.count * (1 - item.discount / 100)),
    0
  )

  const increase = id => {
    setItems(prev => prev.map(item => (item.id === id ? { ...item, count: item.count + 1 } : item)))

    const newCount = items.find(item => item.id === id).count + 1
    updateCartItem(id, newCount).catch(err => console.log('err', err))
  }

  const decrease = id => {
    setItems(prev =>
      prev.map(item =>
        item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    )
    const newCount = items.find(item => item.id === id).count - 1
    if (newCount >= 1) {
      updateCartItem(id, newCount)
    }
  }

  const handleDelete = id => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setItems(prev => prev.filter(item => item.id !== id))
      removeFromCart(id)
    }
  }

  return (
    <main>
      <h2>장바구니</h2>
      {items.length > 0 && (
        <p>
          장바구니 리스트는 <strong>{items.length}</strong>개이고, 총 상품 갯수는{' '}
          <strong>{totalCount}</strong>개 입니다.
        </p>
      )}

      {items.length === 0 ? (
        <p className={css.empty}>장바구니 비었음 텅~</p>
      ) : (
        <>
          <ul className={css.cartList}>
            {items.map(item => (
              <li key={item.id} className={css.cartItem}>
                <div className={css.cartImg}>
                  <img src={`/public/img/${item.img}`} alt={item.title}></img>
                </div>
                <div className={css.title}>{item.title}</div>
                <div className={css.price}>{formatCurrency(item.price)}</div>
                <div className={css.btnArea}>
                  <button
                    onClick={() => {
                      decrease(item.id)
                    }}
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    onClick={() => {
                      increase(item.id)
                    }}
                  >
                    +
                  </button>
                </div>
                <div className={css.sum}>{formatCurrency(item.price * item.count)}</div>
                <div
                  className={css.deleteBtn}
                  onClick={() => {
                    handleDelete(item.id)
                  }}
                >
                  <i className="bi bi-trash3-fill"></i>
                </div>
              </li>
            ))}
          </ul>

          <div className={css.totalPrice}>
            총 금액 <strong>{totalSum}</strong>
          </div>
        </>
      )}
    </main>
  )
}

export default CartPage
