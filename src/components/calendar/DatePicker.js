import React, {useState} from 'react'
import Calendar from 'react-calendar';
import './datePicker.css'


function DatePicker() {
  const today = new Date() //need to be formate as yyyy-mm-dd
  const [date, setDate] = useState(today);
  console.log(date);
  
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