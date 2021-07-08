import React from 'react'
import axios from 'axios'
import './bookingConfirm.css'
import BoardingPass from '../components/boardingPass/BoardingPass'
import Button from '../components/Button'
import { log } from 'async'

const BookingConfirm = () => {
  const orderData = {
    bookingDate: window.localStorage.date,
    // bookingDate: '2021-07-31',
    startTime: window.localStorage.time,
    numberOfPeople: window.localStorage.numberOfPeople,
    storeName: window.localStorage.location,
  }

  const sendToServer = () => {
    axios
      .post('http://localhost:8080/booking', { body: { ...orderData } })
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  //console.log(orderData)
  return (
    <div className="container p-5">
      <div className="booking-confirm-text">您好，請確認您的預約資訊</div>
      <BoardingPass orderData={orderData} />
      {/* 這邊的className跟booking-process page的相同 */}
      <div className="booking-process-button-wrapper">
        <Button link="/booking" buttonText="回上一頁" className="" />
        {/* 用一個div包起來 */}
        <div onClick={sendToServer}>
          <Button
            link={'/booking-success'}
            buttonText="確認預約"
            className=""
          />
        </div>
      </div>
    </div>
  )
}

export default BookingConfirm
