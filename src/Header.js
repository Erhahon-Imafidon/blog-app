import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';


const Header = ({ title }) => {
  const { width }  = useWindowSize();

  return (
    <header className='Header'>
        <h1>{title}</h1>
        {width < 768 ? <FaMobileAlt color='indigo' />
            : width < 992 ? <FaTabletAlt color='crimson' />
            : <FaLaptop color='red' />
        }
    </header>
  )
}

export default Header