import React from 'react'
import './store.css'

const Store = (props) => {
    
    // storeName: str, storeImg: str, address: str, tel: str, availibility: obj
    // availibility: {'13': true,'14': true,'15': true,'16': true, ...},
    const { storeName, storeImg, address, tel, availibility } = props.store
    
    return (
        <div className="store-info-container">
            <div className="store-img-wrapper"><img src={storeImg} alt={storeName} /></div>
            <div>
                <h3>{storeName}</h3>
                <h4>{address}</h4>
                <h4>{tel}</h4>
            </div>
        </div>
    )
}

export default Store
