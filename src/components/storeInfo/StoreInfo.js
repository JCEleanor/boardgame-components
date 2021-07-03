import React, { useState } from 'react'
import { store1, store2 } from '../../storeData'
import Store from './Store'

const StoreInfo = () => {
    const [locationAndTime, setLocationAndTime] = useState({ storeId: null, time: null })

    console.log(locationAndTime);

    return (
        // to do: a filter button to either show all stores or show only one based on user input
        <>
            <Store store={store1} onLocationAndTimeChange={setLocationAndTime} locationAndTime={locationAndTime} />
            <Store store={store2} onLocationAndTimeChange={setLocationAndTime} locationAndTime={locationAndTime}/>
        </>
    )
}

export default StoreInfo
