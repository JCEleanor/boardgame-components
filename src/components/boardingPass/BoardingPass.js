import React, {useEffect, useState} from 'react'
import BoardingPassPc from './BoardingPassPc'
import BoardingPassMobile from './BoardingPassMobile'


const BoardingPass = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
      const updateWindowDimensions = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
      };
  
      window.addEventListener("resize", updateWindowDimensions);
  
      return () => window.removeEventListener("resize", updateWindowDimensions) 
  
    }, []);

    console.log('current width: ', width);
  
    if (width > 1195) {
        return (<BoardingPassPc/>)
    } else {
        return (<BoardingPassMobile/>)
    }
    
}

export default BoardingPass
