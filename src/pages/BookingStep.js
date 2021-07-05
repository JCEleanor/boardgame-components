import React from 'react'
import StepCard from '../components/stepCards/StepCard'
import { step1, step2, step3, step4 } from '../stepData'

const BookingStep = () => {
    return (
        <>
            <StepCard step={step1}/>
            <StepCard step={step2}/>
            <StepCard step={step3}/>
            <StepCard step={step4} />
        </>
    )
}

export default BookingStep
