import React from 'react'
import { store1, store2 } from '../../storeData'
import Store from './Store'

const StoreInfo = () => {
    return (
        <>
            <Store store={store1}/>
            <Store store={store2}/>
        </>
    )
}

export default StoreInfo
