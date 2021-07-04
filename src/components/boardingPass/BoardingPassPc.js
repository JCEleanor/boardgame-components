import React from 'react'
import './boardingPass.css'
import {bookingInfo} from '../../orderData'
import boardingPass from '../../images/boardingPass.png'
import boardingPassStamp from '../../images/boardingPassStamp.png'

const {bookingId, bookingDate, orderPlaceDate, startTime, bookingName, bookingContact, people, storeName} = bookingInfo

const BoardingPassPc = () => {
        return (
            <div className="boarding-pass-wrapper">
                <img className="bording-pass" src={bookingId? boardingPassStamp: boardingPass} alt="boarding pass" />
                <div className="booking-info-wrapper">
                    <div className="main-text-wrapper">
                        <div className="booking-main-info-row"><div className="booking-info-title">訂單編號</div><div className="booking-info-content">{bookingId || <i>待確認</i>}</div></div>
                        <div className="booking-main-info-row"><div className="booking-info-title">訂位大名</div><div className="booking-info-content">{bookingName}</div></div>
                        <div className="booking-main-info-row"><div className="booking-info-title">訂單成立日</div><div className="booking-info-content">{orderPlaceDate}</div></div>
                        <div className="booking-main-info-row"><div className="booking-info-title">聯絡資訊</div><div className="booking-info-content">{bookingContact}</div></div>
                        <div className="booking-main-info-row"><div className="booking-info-title">人數</div><div className="booking-info-content">{people} 人</div></div>
                    </div>
                    <div className="sub-text-wrapper">
                        <div className="booking-sub-info-row"><div className="booking-sub-info-title">訂位日期</div><div className="booking-sub-info-content">{bookingDate}</div></div>
                        <div className="booking-sub-info-row"><div className="booking-sub-info-title">訂位時間</div><div className="booking-sub-info-content">{startTime}:00</div></div>
                        <div className="booking-sub-info-row"><div className="booking-sub-info-title">訂位地點</div><div className="booking-sub-info-content">{storeName}</div></div>
                    </div>
                </div>
            </div>
        )
    }



export default BoardingPassPc

