import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-700 text-white rounded py-2 px-6 md:ml-8 hover:bg-blue-500 duration-500 cursor-pointer inter'>
      {props.children}
    </button>
  )
}

export default Button
