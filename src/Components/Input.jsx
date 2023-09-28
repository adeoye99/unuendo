import React from 'react'

function Input({ placeholder , type , value , name , onChange}) {
  return (
    <div>
    <input
    name = {name}     
    placeholder={placeholder}
    type={type}
    value = {value}
    className=' border-2 text-sm rounded border-gray-300 h-[50px] mt-[5%] w-[100%] p-3 outline-none  hover:border-[#9370db] focus:border-[#9370db] appearance-none'
    onChange = {onChange}
   />
      
    </div>
  )
}

export default Input
