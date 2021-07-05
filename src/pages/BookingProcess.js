import React from 'react'
import DatePicker from '../components/calendar/DatePicker'
import PeopleSelect from '../components/peopleSelect/PeopleSelect'
import StoreInfo from '../components/storeInfo/StoreInfo'


const BookingProcess = () => {
    return (
        <>
            <DatePicker />
            <PeopleSelect />
            <StoreInfo />
        </>
    )
}

export default BookingProcess
