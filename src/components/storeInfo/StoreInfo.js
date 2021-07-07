import React from 'react'
import { store1, store2 } from '../../storeData'
import Store from './Store'

const StoreInfo = (props) => {
  const { locationAndTime, setLocationAndTime, showStores } = props

  switch (showStores) {
    case 'daan':
      return (
        <>
          <Store
            // 大安店
            store={store1}
            onLocationAndTimeChange={setLocationAndTime}
            locationAndTime={locationAndTime}
          />
        </>
      )
    case 'songshan':
      return (
        <>
          <Store
            // 松山店
            store={store2}
            onLocationAndTimeChange={setLocationAndTime}
            locationAndTime={locationAndTime}
          />
        </>
      )
    default:
      return (
        <>
          <Store
            // 大安店
            store={store1}
            onLocationAndTimeChange={setLocationAndTime}
            locationAndTime={locationAndTime}
          />
          <Store
            // 松山店
            store={store2}
            onLocationAndTimeChange={setLocationAndTime}
            locationAndTime={locationAndTime}
          />
        </>
      )
  }
}

export default StoreInfo
