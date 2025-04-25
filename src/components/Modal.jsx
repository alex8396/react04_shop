import React, { useEffect, useState } from 'react'
import css from './Modal.module.css'
import { formatCurrency } from '@/utils/features'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '@/api/cartApi'

const Modal = ({ product, count, onClose }) => {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true)
      document.body.style.overflow = 'hidden'
    })
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])
  const handleClose = () => {
    setIsActive(false)
    setTimeout(onClose, 300)
  }

  const handleAddToCart = async () => {
    // 장바구니 상품을 추가 json-server 추가
    // cartItem = {
    //   "id": 19,
    //   "title": "test9",
    //   "img": "image9.jpg",
    //   "price": 6500,
    //   "category": "new",
    //   "discount": 5,
    //   "count" : 2
    // }
    // 모달 닫기기
    // 장바구니 페이지로 이동
    try {
      const cartItem = {
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        category: product.category,
        discount: product.discount,
        count: count,
      }
      await addToCart(cartItem)
      handleClose()
      navigate('/cart')
    } catch (err) {
      console.log('err--', err)
    }
  }
  return (
    <div className={`${css.modal} ${isActive ? css.active : ''}`}>
      <div className={`${css.container} `}>
        <div className={css._inner}>
          <h2>장바구니</h2>
          <p>{product.title}</p>
          <div className={css.info}>
            <div className={css.imgWrap}>
              <img src={`/public/img/${product.img}`} alt={product.title} />
            </div>
            <div className={css.cartText}>
              <p>가격 : {formatCurrency(product.price)}</p>
              {product.discount > 0 && <p>할인율 : {product.discount}%</p>}
              <p>수량 : {count}개</p>
              <p>총 가격 : {formatCurrency(product.price * count)}</p>
            </div>
          </div>
          <div className={css.btnCon}>
            <button onClick={handleClose}>취소</button>
            <button onClick={handleAddToCart}>장바구니 담기</button>
          </div>
        </div>
        <button className={css.btnClose} onClick={handleClose}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  )
}

export default Modal
