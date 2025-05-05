import React from 'react'
import Logo from '/mydiarynotes.png'

const Loader = () => {
  return (
    <div className='flex flex-wrap items-center justify-center h-screen w-screen'>
        <img src={Logo} alt="MY DIARY NOTES" title='MY DIARY NOTES' 
            className='h-[15em] sm:h-[18em] md:-[20em] lg:h-[25em] xl:h-[30em] 2xl-[40em] '/>
    </div>
  )
}

export default Loader
