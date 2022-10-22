import React from 'react'

export const ErrAlert = ({ text = '', onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className="bg-red-300 hover:cursor-pointer w-full text-center px-3 py-2 rounded-md"
    >
      <p>{text}</p>
    </div>
  )
}
