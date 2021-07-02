import React from 'react'
import DatePicker from './components/Calendar-unfinished/DatePicker'
import PeopleSelect from './components/peopleRadioButton/PeopleSelect'
import StoreInfo from './components/storeInfo/StoreInfo'
import StepCard from './components/stepCards/StepCard'
import { step1, step2, step3, step4 } from './stepData'

const App = () => {




    return (
        <div className="container">
            <div className="row">
                <StepCard step={step1}/>
                {/* <StepCard step={step2}/>
                <StepCard step={step3}/>
                <StepCard step={step4}/> */}
            </div>
            <div className="row mt-5 mb-5">
                <DatePicker/>
            </div>
            <div>
                <PeopleSelect/>
            </div>
            <div>
                <StoreInfo />
            </div>
            
        </div>

    )
}

export default App
