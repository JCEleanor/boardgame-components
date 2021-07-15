import React from 'react'
import axios from 'axios'
import './bookingConfirm.css'
import BoardingPass from '../components/boardingPass/BoardingPass'
import Button from '../components/Button'

const BookingConfirm = (props) => {
  const orderData = {
    date: window.localStorage.date,
    startTime: window.localStorage.time,
    numberOfPeople: window.localStorage.numberOfPeople,
    storeName: window.localStorage.location,
  }

  const userData = {
    userId: window.localStorage.userId,
    userMail: window.localStorage.userMail,
    username: window.localStorage.username,
  }

  const sendToServer = () => {
    axios
      .post('http://localhost:8080/booking', { ...orderData })
      .then((res) => {
        console.log(res)
        setTimeout(() => {
          // todo: add a spinner
          props.history.push(`/booking/success/${res.data}`)
        }, 100)
      })
      .catch((e) => {
        // todo: error handling
        console.log(e)
      })

    // todo: window.localStorage.removeItem()
  }

  // 如果沒有登入的話，redirect to login page
  if (localStorage.userId) {
    return (
      <div className="container p-5">
        <div className="booking-confirm-text">您好，請確認您的預約資訊</div>
        <BoardingPass orderData={orderData} userData={userData} />
        {/* 這邊的className跟booking-process page的相同 */}
        <div className="booking-process-button-wrapper">
          <Button link="/booking" buttonText="回上一頁" className="" />
          <button className="general-button" onClick={sendToServer}>
            確認預約
          </button>
        </div>
      </div>
    )
  } else {
    setTimeout(() => {
      props.history.push('/login')
    }, 100)
    return null
  }
}

export default BookingConfirm
