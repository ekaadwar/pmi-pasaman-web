import React from 'react'
import Container from '../components/Container'

class UpdatePass extends React.Component {
  render() {
    return (
      <section className="profile min-h-screen pt-32 pb-20">
        <Container content={<p className="text-white">Update Password</p>} />
      </section>
    )
  }
}

export default UpdatePass
