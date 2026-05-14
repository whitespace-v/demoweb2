import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signin() {

    const [login, setLogin] = useState()
    const [pwd, setPwd] = useState()
    const navigate = useNavigate()

  const signin = async ( ) => {
    if (!login || !pwd) {
        alert("Заполните все поля")
        return
    } 
    const req = await axios.post('http://localhost:5000/user/signin', {login, pwd})
 
    if (req.data.token) {
        localStorage.setItem('token', req.data.token)
        if (login == "avto2024") {
            navigate("/admin")
        } else {
            navigate('/create-order')
        }
    } else {
        alert("что-то не так")
    }
  }
  return (
    <div>
        <NavBar/>
        <div>
            <div>Страница авторизации</div>
            <div>
                <div>
                    Логин
                </div>
                <input type="text" onChange={e => setLogin(e.target.value)} value={login}/>
                <div>Пароль</div>
                <input type="text" onChange={e => setPwd(e.target.value)}  value={pwd}/>
            </div>
            <div onClick={async () => await signin()}>Войти</div>
        </div>
    </div>
  )
}
