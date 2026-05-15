import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'
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
        <>
        <img src="logo.png" alt="" srcset="" width={120}/>
        <p>Едем но это не точно</p>
       <div className='navbar'>
        <div onClick={() => navigate('/create-order')}>Создать заявку</div>
        <div onClick={() => navigate('/fill-order')}>Заполнить заявку</div>
        {isLogin && <div onClick={() => signout()}>Выход</div>}
   
    </div> 
        </>
       
   
  )
}

export default NavBar