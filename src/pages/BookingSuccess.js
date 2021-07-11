import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BoardingPass from '../components/boardingPass/BoardingPass'

const BookingSuccess = ({ match }) => {
  const reservationId = match.params.id
  const [orderData, setOrderData] = useState({})

  // orderData should look like this:
  // orderData {
  //   // 在確認頁面還不會有訂單編號
  //   bookingId,
  //   bookingDate,
  //   startTime,
  //   // 當前登入的會員
  //   bookingName,
  //   // 當前登入的會員
  //   bookingContact,
  //   numberOfPeople,
  //   storeName,
  // }

  useEffect(() => {
    axios
      .get('http://localhost:8080/booking/success', {
        params: { reservationId },
      })
      .then((res) => {
        console.log(res.data)
        setOrderData(res.data)
      })
      .catch((e) => {
        // todo: handle error message
        console.log(e)
      })
  }, [])

  return (
    <>
      <BoardingPass orderData={orderData} />
      {/* {...orderData} */}
    </>
  )
}

export default BookingSuccess
