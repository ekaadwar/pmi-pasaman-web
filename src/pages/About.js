import React from 'react'
import Container from '../components/Container'
import { strukturOrganisasi } from '../assets'
import { PrimaryButton } from '../components/Button'

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <Container
        content={
          <div className="py-10">
            <div className="flex justify-center">
              <div className="max-w-xs w-full">
                <PrimaryButton content="Struktur Organisasi" />
              </div>
            </div>

            <div className="bg-red-100">
              <img
                src={strukturOrganisasi}
                alt="Struktur Organisasi Palang Merah Indonesia Kabupaten Pasaman"
                width={'100%'}
              />
            </div>
          </div>
        }
      />
    </div>
  )
}

export default About
