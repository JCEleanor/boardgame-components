import React from 'react'
import './storeSelect.css'
import StoreSelect from './StoreSelect'
import allStore from '../../images/allStore.svg'
import daanStore from '../../images/daanStore.svg'
import songShanStore from '../../images/songShanStore.svg'

const StoreSelectButtons = (props) => {
  const { store, setStore } = props

  return (
    <div className="store-select-wrapper">
      <StoreSelect
        text="全部"
        icon={allStore}
        setStore={setStore}
        value="all"
        store={store}
      />
      <StoreSelect
        text="大安店"
        icon={daanStore}
        setStore={setStore}
        value="daan"
        store={store}
      />
      <StoreSelect
        text="松山店"
        icon={songShanStore}
        setStore={setStore}
        value="songshan"
        store={store}
      />
    </div>
  )
}

export default StoreSelectButtons
