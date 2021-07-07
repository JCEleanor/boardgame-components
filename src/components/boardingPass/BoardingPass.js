import React from 'react'
import { useScreen } from '../../hooks/useScreen'
import BoardingPassPc from './BoardingPassPc'
import BoardingPassMobile from './BoardingPassMobile'

const BoardingPass = () => {
  const [width] = useScreen()

  //console.log('current width: ', width)

  return width > 1000 ? <BoardingPassPc /> : <BoardingPassMobile />
}

export default BoardingPass
