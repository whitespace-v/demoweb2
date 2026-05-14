import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function CreateOrder() {
  const navigate = useNavigate()
  const [orders, setOrders] = useState()
  
  useEffect(()=>{
    getOrders()
  }, [])

  const getOrders = async () => {
    const req = await axios.get('http://localhost:5000/user/get-orders/'+localStorage.getItem('token'))
    setOrders(req.data.orders);
    
  }
  return (
    <div>
      <NavBar/>
      <div>история заявок</div>
      <div>
        {orders && orders.map(o => <div>
          <div>{o.addres}</div>
          <div>{o.make}</div>
          <div>{o.model}</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <br />
          <br />
        </div>)}
      </div>
      <div onClick={() => navigate('/fill-order')}>Создать заявку</div>
    </div>
  )
}
