import React from 'react'
import './bookingConfirm.css'
import BoardingPass from '../components/boardingPass/BoardingPass'
import Button from '../components/Button'

const BookingConfirm = () => {
  console.log(window.localStorage)
  return (
    <div className="container p-5">
      <div className="booking-confirm-text">您好，請確認您的預約資訊</div>
      <BoardingPass />
      {/* 這邊的className跟booking-process page的相同 */}
      <div className="booking-process-button-wrapper">
        <Button link="/booking" buttonText="回上一頁" className="" />
        <Button link="/booking-success" buttonText="確認預約" className="" />
      </div>
    </div>
  )
}

export default BookingConfirm
