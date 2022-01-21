import React from 'react';
import {FaSpinner} from 'react-icons/fa'
const Spinner = () => {
  return(
     <img src={FaSpinner} alt='Loadin' style={{
         width:'100px',margin:'auto',display:'block'
     }}/>
  )
};

export default Spinner;
