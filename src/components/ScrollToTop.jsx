import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    // 즉시 스크롤 시도
    //window.scrollTo(0, 0);

    // 객체방식
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto', // 'auto'는 즉시 이동 'smooth' 부드러운 이동
    })
  }, [pathname, search])

  return null // UI를 렌더링하지 않음
}

export default ScrollToTop
