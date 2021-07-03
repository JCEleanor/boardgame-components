import React, { useState } from 'react'
import { store1, store2 } from '../../storeData'
import Store from './Store'

const StoreInfo = () => {
    const [locationAndTime, setLocationAndTime] = useState({ storeId: null, time: null })
    // console.log(locationAndTime);

    return (
        <>
            <Store store={store1} onChange={setLocationAndTime} />
            <Store store={store2} onChange={setLocationAndTime} />
        </>
    )
}

export default StoreInfo
