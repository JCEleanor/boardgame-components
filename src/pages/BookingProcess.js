import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './bookingProcess.css'
import DatePicker from '../components/calendar/DatePicker'
import PeopleSelect from '../components/peopleSelect/PeopleSelect'
import StoreInfo from '../components/storeInfo/StoreInfo'
import Button from '../components/Button'
import StoreSelectButtons from '../components/storeSelectButtons/StoreSelectButtons'

const BookingProcess = () => {
  const today = new Date() //date object might be a problem
  const [selectedDate, setSelectedDate] = useState(today)

  const [people, setPeople] = useState('2')

  // store value could be: all (default), daan, songshan
  const [store, setStore] = useState('all')

  const [locationAndTime, setLocationAndTime] = useState({
    storeName: null, //大安店、松山店
    time: null,
  })
  console.log(locationAndTime)

  // if object content change will trigger useEffect??

  useEffect(() => {
    // every time the dependency arr changes, make request to the server
    axios
      .get('http://localhost:8080/booking', {
        params: { people, selectedDate },
      })
      .then((res) => {
        // 後端回傳的資料：{daan: {13: true, 14: true, 15: false...}, songshan: {13: flase, 14: flase...}}
        // then pass the data to TimeButton component, then use className to en/disable buttons
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [selectedDate, people])

  return (
    <div className="container p-5">
      <div className="row mb-5 d-flex justify-content-between">
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div>
          <PeopleSelect people={people} setPeople={setPeople} />
          <StoreSelectButtons store={store} setStore={setStore} />
        </div>
      </div>
      <StoreInfo
        locationAndTime={locationAndTime}
        setLocationAndTime={setLocationAndTime}
        showStores={store}
      />
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
