import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signup() {
   const [login, setLogin] = useState("")
   const [pwd, setPwd] = useState("")
   const [fio, setFio] = useState("")
   const [phone, setPhone] = useState("")
   const [email, setEmail] = useState("")

   const navigate = useNavigate()

   const signup = async () => {
       if (pwd.length < 6) {
          alert("Пароль меньше 6 символов")
          return
       } 
       if (!/^[А-ЯЁа-яё ]+$/i.test(fio) || / {2,}/.test(fio)){
         alert("Некорректное фио")
         return
       }
        // +7(XXX)-XXX-XX-XX    
       if (!/^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phone)){
        alert("Некорректный номер телефона")
           return
       }
       if (!email.includes("@") || !email.includes(".")){
         alert("Неправильный формат электронной почты")
            return
       }
       try {
            const req = await axios.post("http://localhost:5000/user/signup", {login, pwd, fio, phone, email})
            console.log(req);
            if (req.data.status === 501) {
                alert("Логин занят")
                return
            }
            if (req.data.token) {
                localStorage.setItem('token', req.data.token)
                navigate('/create-order')
            }
       } catch (error) {
            console.log(error);
       }
       
   }

  return (
    <div>
        <div>
            <div>Логин</div>
            <input
                value={login}
                onChange={e => setLogin(e.target.value)}
            />
        </div>
        <div>
            <div>Пароль</div>
            <input
                value={pwd}
                onChange={e => setPwd(e.target.value)}
            />
        </div>
        <div>
            <div>Фио</div>
            <input
             value={fio}
             onChange={e => setFio(e.target.value)}
            />
        </div>
        <div>
            <div>Телефон</div>
             <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
             />
        </div>
        <div>
            <div>E-mail</div>
            <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div onClick={async () => await signup()}>
            Регистрация
        </div>
    </div>
  )
}

export default Signup