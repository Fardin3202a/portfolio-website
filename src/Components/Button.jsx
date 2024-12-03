import React from 'react'

const Button = ({extraStyle, children, handlClick}) => {
  return (
    <div>
        <button onClick={handlClick} className={` rounded-full font-medium ${extraStyle}`}>{children}</button>
    </div>
  )
}

export default Button