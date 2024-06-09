import React from 'react'

const GeneralCard = ({icon, content}) => {
  return (
    <div className="bg-[--card] rounded-md p-[15px]" >
    <img src={icon} alt="icon" />
    <p className="mt-[15px] text-[--second] text-[24px] font-semibold " > {content} </p>
</div>
  )
}

export default GeneralCard