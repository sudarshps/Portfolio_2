import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='mt-36 bg-darkBlue flex items-center justify-center min-h-[80px]'>
      <h1>© Copyright {year} SPS | All Rights Reserved.</h1>
    </div>
  )
}

export default Footer
