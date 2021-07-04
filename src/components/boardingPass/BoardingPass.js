import React, {useEffect, useState} from 'react'
import BoardingPassPc from './BoardingPassPc'
import BoardingPassMobile from './BoardingPassMobile'


const BoardingPass = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const updateWindowDimensions = () => {
          setWidth(window.innerWidth);
          //console.log('updating width');
      };
  
      window.addEventListener("resize", updateWindowDimensions);
  
      return () => window.removeEventListener("resize", updateWindowDimensions) 
  
    }, []);

    //console.log('current width: ', width);
  
    return (
        width > 1195 ? <BoardingPassPc /> : <BoardingPassMobile/>
    )
}
    

export default BoardingPass
