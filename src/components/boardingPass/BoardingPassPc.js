import React from 'react'
import './boardingPass.css'
import boardingPass from '../../images/boardingPass.png'
import boardingPassStamp from '../../images/boardingPassStamp.png'

const BoardingPassPc = (props) => {
  const {
    // 在確認頁面還不會有訂單編號
    bookingId,
    bookingDate,
    startTime,
    // 當前登入的會員
    bookingName,
    // 當前登入的會員
    bookingContact,
    numberOfPeople,
    storeName,
  } = props

  return (
    <div className="boarding-pass-wrapper">
      <img
        className="bording-pass"
        src={bookingId ? boardingPassStamp : boardingPass}
        alt="boarding pass"
      />
      <div className="booking-info-wrapper">
        <div className="main-text-wrapper">
          <div className="booking-main-info-row">
            <div className="booking-info-title">訂單編號</div>
            <div className="booking-info-content">
              {bookingId || <i>待確認</i>}
            </div>
          </div>
          <div className="booking-main-info-row">
            <div className="booking-info-title">訂位大名</div>
            <div className="booking-info-content">
              {bookingName || '張祐如'}
            </div>
          </div>
          <div className="booking-main-info-row">
            <div className="booking-info-title">訂單成立日</div>
            <div className="booking-info-content">2021-07-07</div>
          </div>
          <div className="booking-main-info-row">
            <div className="booking-info-title">聯絡資訊</div>
            <div className="booking-info-content">
              {bookingContact || '0926554778'}
            </div>
          </div>
          <div className="booking-main-info-row">
            <div className="booking-info-title">人數</div>
            <div className="booking-info-content">
              {numberOfPeople || 10} 人
            </div>
          </div>
        </div>
        <div className="sub-text-wrapper">
          <div className="booking-sub-info-row">
            <div className="booking-sub-info-title">訂位日期</div>
            <div className="booking-sub-info-content">
              {bookingDate || '2021-07-31'}
            </div>
          </div>
          <div className="booking-sub-info-row">
            <div className="booking-sub-info-title">訂位時間</div>
            <div className="booking-sub-info-content">
              {startTime || '13'}:00
            </div>
          </div>
          <div className="booking-sub-info-row">
            <div className="booking-sub-info-title">訂位地點</div>
            <div className="booking-sub-info-content">
              {storeName || '大安店'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardingPassPc
