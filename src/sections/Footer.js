import React from 'react'
import Container from '../components/Container'
import { logoName } from '../assets'
import { socialMedia } from '../dummy'
import MediaLane from '../components/MediaLane'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer text-white">
      <Container
        content={
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-10 py-10">
            <div className="max-w-lg space-y-5">
              <Link to="/">
                <div className="w-40">
                  <img
                    src={logoName}
                    alt="Palang Merah Indonesia Kabupaten Pasaman"
                  />
                </div>
              </Link>
              <p className="max-w-xs">
                Meningkatkan ketersediaan darah yang aman, mudah dijangkau,
                berkualitas dan berkesinambungan di seluruh Indonesia
              </p>
              <p>
                Jalan A. Yani Nomor 28, Kec. Lubuk Sikaping, Pasaman, <br />
                Sumatera Barat 26318
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end space-y-2">
              {socialMedia.map((item, idx) => (
                <div key={idx}>
                  <MediaLane
                    media={item.media}
                    icon={item.icon}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </div>
        }
      />
    </div>
  )
}

export default Footer
