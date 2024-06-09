import React from 'react'

const OutWorkCart = ({img, title, p}) => {
  return (
    <div className='text-center gap-2 flex justify-center flex-col '>
        <img src={img} alt="" className='w-[100px] mx-auto ' />
        <p className='font-semibold text-[24px] '> {title} </p>
        <p className='text-[18px] '>{p} </p>
    </div>
  )
}

export default OutWorkCart