import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

export default function Admin() {
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(false)
    const [reason,setReason] =useState('')
    const [status, setStatus] = useState("")
    const [orderId, setOrderId] = useState(0)
  useEffect(() => {
    getAll()
  }, [])

  const getAll = async () => {
    const req = await axios.get("http://localhost:5000/user/getall")
    setData(req.data.data)

  }
  const send = async () => {
    await axios.post("http://localhost:5000/user/edit", {id: orderId, reason, status})
  }
  return (
    <div>
      <div className='title'>
 Панель администратора
      </div>
       
        <NavBar/>
        {data.map(u => <div>
            {u.id}
            {u.login}
            {u.login}
            {u.login}
            <div>
                Заявки
                <div>
                    {u.orders.map(o => <div>
                        {o.addres}
                        <div>
                            {o.status}
                            
                            <div onClick={() => {setEdit(!edit); setOrderId(o.id)}}>Изменить статус</div>
                            {edit && <div>
                                <div onClick={() => setStatus("Одобрено")}>Одобрено</div>
                                <div onClick={() => setStatus("Выполнено")}>Выполнено</div>
                                <div onClick={() => setStatus("Отклонено")}>Отклонено</div>
                                <input type="text" value={reason} onChange={e => setReason(e.target.value)}/>
                                <div onClick={async () => await send()}>Отправить</div>
                                </div>
                            }
                        </div>
                        </div>)}
                </div>
            </div>
        </div>)}
    </div>
  )
}
