import React from 'react'
import { Email } from './Email'

const Footer = () => {
  return (
    <div className='w-[100vw] h-[30vh] border-t border-b bg-white'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <p className='text-black mt-14 tracking-widest'>Subscribe to our emails</p>
        <div>
          <Email />
        </div>
      </div>
    </div>
  )
}

export default Footer
