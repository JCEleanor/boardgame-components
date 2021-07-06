import React from 'react'
import "./bookingProcess.css"
import DatePicker from "../components/calendar/DatePicker"
import PeopleSelect from "../components/peopleSelect/PeopleSelect"
import StoreInfo from "../components/storeInfo/StoreInfo"
import Button from "../components/Button"

const BookingProcess = () => {
  return (
    <div className="container p-5">
      <div className="row mb-5 d-flex justify-content-between">
        <DatePicker />
        <div>
          <PeopleSelect />
          {/* 分店選擇按鈕 */}
          {/* <StoreSelect /> */}
        </div>
      </div>
      <StoreInfo />
      <div className="booking-process-button-wrapper">
        <Button link="" buttonText="回上一頁" className={null} />
        <Button
          link="/booking-confirm"
          buttonText="確認預約"
          className={null}
        />
      </div>
    </div>
  )
}

export default BookingProcess
