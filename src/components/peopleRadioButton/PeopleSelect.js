import React, {useState} from 'react'
import PeopleRadioButton from './PeopleRadioButton'


const PeopleSelect = () => {

    const [selected, setSelected] = useState("2");
    console.log(selected, '人');
    return (
        <div className="">
            <PeopleRadioButton
                value="2"
                selected={selected}
                text="2 - 4 人"
                visuals={4}
                onChange={setSelected} />
            <PeopleRadioButton
                value="4"
                selected={selected}
                text="4 - 6 人"
                visuals={6}
                onChange={setSelected} />
            <PeopleRadioButton
                value="6"
                selected={selected}
                text="6 - 8 人"
                visuals={8}
                onChange={setSelected} />
            <PeopleRadioButton
                value="8"
                selected={selected}
                text="8人以上"
                visuals={10}
                onChange={setSelected} />
        </div>
    )
}

export default PeopleSelect
