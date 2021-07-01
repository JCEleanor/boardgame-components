//calendar: width: 458px, height: 374px
//mobile: w: 325px h: 285px
import React, {useState} from 'react'
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './datePicker.css'


function DatePicker() {
  const today = new Date() //need to be formate as yyyy-mm-dd
  const [date, setDate] = useState(today);
  console.log(date);
  

  // 滑鼠離開後就會失焦 沒辦法選擇

    return (
      <Calendar
        onChange={setDate}
        // value={date}
        defaultValue={today}
        locale={"en"}
        minDate={today}
        next2Label={null}
        prev2Label={null}

      />
    );
}
  
export default DatePicker