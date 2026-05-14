import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
        setIsLogin(true)
    }

  }, [])
  
  const signout = () => {
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div>
        <div onClick={() => navigate('/create-order')}>Создать заявку</div>
        <div onClick={() => navigate('/fill-order')}>Заполнить заявку</div>

        {isLogin && <div onClick={() => signout()}>Выход</div>}
    </div>
  )
}

export default NavBar