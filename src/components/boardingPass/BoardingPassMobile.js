import React from 'react'
import './boardingPassMobile.css'
import {bookingInfo} from '../../orderData'

// idk why the resolution is like crap
import boardingPassMobile from '../../images/boardingPassMobile.png'
import boardingPassStampMobile from '../../images/boardingPassStampMobile.png'

const {bookingId, bookingDate, orderPlaceDate, startTime, bookingName, bookingContact, people, storeName} = bookingInfo


const BoardingPassMobile = () => {
    return (
        <div className="boarding-pass-mobile-wrapper">
            <img className="boarding-pass" src={boardingPassMobile} alt="boarding pass" />
            <div className="booking-info-wrapper-m">
                    <div className="main-text-wrapper-m">
                        <div className="booking-main-info-row-m"><div className="booking-info-title-m">訂單編號</div><div className="booking-info-content-m">{bookingId || <i>待確認</i>}</div></div>
                        <div className="booking-main-info-row-m"><div className="booking-info-title-m">訂位大名</div><div className="booking-info-content-m">{bookingName}</div></div>
                        <div className="booking-main-info-row-m"><div className="booking-info-title-m">訂單成立日</div><div className="booking-info-content-m">{orderPlaceDate}</div></div>
                        <div className="booking-main-info-row-m"><div className="booking-info-title-m">聯絡資訊</div><div className="booking-info-content-m">{bookingContact}</div></div>
                        <div className="booking-main-info-row-m"><div className="booking-info-title-m">人數</div><div className="booking-info-content-m">{people} 人</div></div>
                    </div>
                    <div className="sub-text-wrapper-m">
                        <div className="booking-sub-info-row-m"><div className="booking-sub-info-title-m">訂位日期</div><div className="booking-sub-info-content-m">{bookingDate}</div></div>
                        <div className="booking-sub-info-row-m"><div className="booking-sub-info-title-m">訂位時間</div><div className="booking-sub-info-content-m">{startTime}:00</div></div>
                        <div className="booking-sub-info-row-m"><div className="booking-sub-info-title-m">訂位地點</div><div className="booking-sub-info-content-m">{storeName}</div></div>
                    </div>
                </div>
        </div>
    )
}

export default BoardingPassMobile
