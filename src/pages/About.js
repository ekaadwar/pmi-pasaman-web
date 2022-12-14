import React, { useState } from 'react'
import Container from '../components/Container'
import { PrimaryButton } from '../components/Button'
import OrganizationStructure from '../components/OrganizationStructure'
import PMIHist from '../components/PMIHist'

const About = () => {
  const [isHistory, setIsHistory] = useState(true)
  const [isStructure, setIsStructure] = useState(false)

  const toHistory = () => {
    setIsStructure(false)
    setIsHistory(true)
  }

  const toStructure = () => {
    setIsStructure(true)
    setIsHistory(false)
  }
  return (
    <div className="min-h-screen pt-20">
      <Container
        content={
          <div className="py-10">
            <div className="flex flex-col sm:flex-row sm:justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="max-w-xs w-full">
                <PrimaryButton onClick={toHistory} content="Sejarah PMI" />
              </div>
              <div className="max-w-xs w-full">
                <PrimaryButton
                  onClick={toStructure}
                  content="Struktur Organisasi"
                />
              </div>
            </div>

            {isStructure && (
              <div>
                <OrganizationStructure />
              </div>
            )}
            {isHistory && (
              <div>
                <PMIHist />
              </div>
            )}
          </div>
        }
      />
    </div>
  )
}

export default About
