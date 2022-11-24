import React from 'react'
// import { useHistory } from 'react-router-dom'

const MediaLane = ({ media = '', icon = <div />, link = null }) => {
  // const history = useHistory()
  const move = (link) => {
    if (link) {
      window
        .open('https://www.instagram.com/pasamanpmi/?hl=id', '_blank')
        .focus()
    }
  }
  return (
    <div
      onClick={() => move(link)}
      className="flex flex-row-reverse sm:flex-row items-center sm:space-x-5 cursor-pointer"
    >
      <p>{media}</p>
      {icon}
    </div>
  )
}

export default MediaLane
