import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
          <h1 style={{color: 'red', textAlign: 'center'}}>Oops! 404 Error!</h1>
          <h2>Page Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to='/' style={{textDecoration: 'none'}}>Visit Our Homepage</Link>
          </p>

    </main>
  )
}

export default Missing