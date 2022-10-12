import React from 'react'

export const PrimaryDot = ({ content = <div /> }) => {
  return (
    <div
      className={`flex justify-center items-center bg-red-600 w-5 h-5 rounded-full`}
    >
      {content}
    </div>
  )
}

export const SecondaryDot = ({ content = <div /> }) => {
  return (
    <div
      className={`flex justify-center items-center bg-red-800 w-5 h-5 rounded-full`}
    >
      {content}
    </div>
  )
}

export const CircleMd = ({ content = <div /> }) => {
  return (
    <div className="flex justify-center items-center overflow-hidden w-32 h-32 bg-red-300 rounded-full">
      {content}
    </div>
  )
}

export const CircleSm = ({ content = <div /> }) => {
  return (
    <div className="flex justify-center items-center overflow-hidden w-12 h-12 rounded-full">
      {content}
    </div>
  )
}
