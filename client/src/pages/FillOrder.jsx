import axios from 'axios'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'

export default function FillOrder() {
    const [addres, setAddres] = useState()
    const [contacts, setContacts] = useState()
    const [time, setTime] = useState()
    const [licenseSerial, setLicenseSerial] = useState()
    const [licenseNumber, setLicenseNumber] = useState()
    const [licenseIssued, setLicenseIssued] = useState()

    const [make, setMake] = useState()
    const [model, setModel] = useState()
    const cars = [
            {make: "Toyota", models: ["Mark 2", "Vitz", "Land Cruiser"]},
            {make: "Nissan", models: ["March", "Juke", "Skyline"]}
        ]
    const createOrder = async () => {
        if (addres && contacts && time && licenseSerial && licenseNumber && licenseIssued && make && model) {
            const req = await axios.post('http://localhost:5000/user/create-order', {addres, contacts, time, licenseSerial, licenseNumber, licenseIssued, make, model, token: localStorage.getItem("token")})
        } else{
            alert("Одно из полей отсутствует")
        }
    }
  return (
    <div>
        <NavBar/>
          <div className='title'>
                Заполнение заявки
      </div>
        <div>
            <div>
                <div>
                    <div>Адрес</div>
                    <input type="text" onChange={e => setAddres(e.target.value)}/>
                    <div>Контактные данные</div>
                    <input type="text" onChange={e => setContacts(e.target.value)}/>
                    <div>Желаемая дата и время</div>
                    <input type="text" onChange={e => setTime(e.target.value)}/>
                </div>  
                <div>
                    <div>Водительское удостоверение</div>
                    <div>
                        <div>Серия</div>
                        <input type="text" onChange={e => setLicenseSerial(e.target.value)}/>
                    </div>
                      <div>
                        <div>Номер</div>
                        <input type="text" onChange={e => setLicenseNumber(e.target.value)}/>
                    </div>
                      <div>
                        <div>Дата выдачи</div>
                        <input type="text" onChange={e => setLicenseIssued(e.target.value)}/>
                    </div>
                </div>     
            </div>
              <p>Выберите марку и модель:</p>
            <div className='cars'>
              
                {cars.map(m => <div className='makes'>
                    <div onClick={() => setMake(m.make)} className='button'>{m.make}</div>
                    {m.models.map(model => <div className='button' onClick={() => setModel(model)}>{model}</div>)}
                </div>)}
            </div>
            <div onClick={async () => await createOrder()} className='accent'>Создать заявку</div>
        </div>
    </div>
  )
}
