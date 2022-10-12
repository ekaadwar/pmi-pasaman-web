import React from 'react'
import { PrimaryDot } from './Circle'

const List = ({ list = [] }) => {
  return (
    <>
      {list.map((item, idx) => (
        <div key={idx} className="flex flex-row items-start mb-2">
          <div className="pr-4">
            <PrimaryDot />
          </div>
          <p>{item}</p>
        </div>
      ))}
    </>
  )
}

export default List
