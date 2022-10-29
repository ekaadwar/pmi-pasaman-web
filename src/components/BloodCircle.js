import React from 'react'

const BloodCircle = ({ data = [] }) => {
  return (
    <div className="shadow-89 flex w-52 h-52 bg-gray-500 text-white rounded-full overflow-hidden cursor-pointer">
      <div className="bg-primary flex-1 flex items-center justify-center text-end">
        <div className="p-3">
          <p className="text-5xl font-thin">{data[0]?.gol_darah}</p>
          <p className="text-2xl font-bold">{data[0]?.total}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col text-start">
        <div className="bg-analogus-1 flex-1 flex flex-col justify-end p-3">
          <p className="text-2xl font-thin">{data[1]?.gol_darah}</p>
          <p className="text-lg font-bold">{data[1]?.total}</p>
        </div>
        <div className="bg-analogus-2 flex-1 p-3">
          <p className="text-2xl font-thin">{data[2]?.gol_darah}</p>
          <p className="text-lg font-bold">{data[2]?.total}</p>
        </div>
      </div>
    </div>
  )
}

export default BloodCircle
