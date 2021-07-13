import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BoardingPass from '../components/boardingPass/BoardingPass'

const BookingSuccess = ({ match }) => {
  const reservationId = match.params.id
  const [orderData, setOrderData] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:8080/booking/success/${reservationId}`)
      .then((res) => {
        console.log(res.data)
        setOrderData(res.data)
      })
      .catch((e) => {
        // todo: handle error message
        console.log(e)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <BoardingPass orderData={orderData} />
      {/* {...orderData} */}
    </>
  )
}

export default BookingSuccess
