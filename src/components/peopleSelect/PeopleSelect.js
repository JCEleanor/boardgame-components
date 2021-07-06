import React from 'react'
import PeopleRadioButton from './PeopleRadioButton'

const PeopleSelect = (props) => {
  const {people, setPeople} = props

  return (
    // adjudt height later
    <div>
      <PeopleRadioButton
        value="2"
        selected={people}
        text="2 - 4 人"
        iconLength={4}
        onChange={setPeople}
      />
      <PeopleRadioButton
        value="4"
        selected={people}
        text="4 - 6 人"
        iconLength={6}
        onChange={setPeople}
      />
      <PeopleRadioButton
        value="6"
        selected={people}
        text="6 - 8 人"
        iconLength={8}
        onChange={setPeople}
      />
      <PeopleRadioButton
        value="8"
        selected={people}
        text="8人以上"
        iconLength={10}
        onChange={setPeople}
      />
    </div>
  )
}

export default PeopleSelect
