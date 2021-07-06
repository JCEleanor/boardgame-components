import React, {useState, useEffect} from 'react'
import './bookingProcess.css'
import DatePicker from '../components/calendar/DatePicker'
import PeopleSelect from '../components/peopleSelect/PeopleSelect'
import StoreInfo from '../components/storeInfo/StoreInfo'
import Button from '../components/Button'
import StoreSelectButtons from '../components/storeSelectButtons/StoreSelectButtons'

const BookingProcess = () => {

  const today = new Date() //need to be formate as yyyy-mm-dd
  const [selectedDate, setSelectedDate] = useState(today)
  console.log(selectedDate)

  const [people, setPeople] = useState('2')
  console.log(people, '人')

  const [locationAndTime, setLocationAndTime] = useState({
    storeName: null,
    time: null,
  })
  console.log(locationAndTime)

  return (
    <div className="container p-5">
      <div className="row mb-5 d-flex justify-content-between">
        <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <div>
          <PeopleSelect people={people} setPeople={setPeople}/>
          <StoreSelectButtons />
        </div>
      </div>
      {/* storeInfo needs to receive a props from <StoreSelect/> */}
      <StoreInfo locationAndTime={locationAndTime} setLocationAndTime={setLocationAndTime} />
      <div className="booking-process-button-wrapper">
        <Button link='' buttonText='回上一頁' className={null} />
        <Button
          link='/booking-confirm'
          buttonText='確認預約'
          className={null}
        />
      </div>
    </div>
  )
}

export default BookingProcess
