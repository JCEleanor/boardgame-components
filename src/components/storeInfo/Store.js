import React from 'react'
import TimeButton from './TimeButton'
import './store.css'


const Store = (props) => {

    // availibility: {13: true, 14: true, 15: true, 16: true, ...},
    const { storeId, storeName, storeImg, address, tel, availibility } = props.store
    const { onLocationAndTimeChange } = props
    const buttons = []
    
    for (const [key, isAvailible] of Object.entries(availibility)) {
        buttons.push(<TimeButton key={key} value={{ storeId, time: key }} isAvailible={isAvailible} onSelectChange={onLocationAndTimeChange}/>)}
    
    
    return (
        <div className="store-info-container">
            <div className="store-img-wrapper"><img src={storeImg} alt={storeName} /></div>
            <div>
                <h3 className="store-name">{storeName}</h3>
                <h4 className="store-address">{address}</h4>
                <h4 className="store-tel">{tel}</h4>
                <div className="time-button-group">{buttons}</div>
            </div>
        </div>
    )
}

export default Store
