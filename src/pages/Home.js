import React from 'react'
import { connect } from 'react-redux'

import BloodBox from '../components/BloodBox'
import Container from '../components/Container'
import List from '../components/List'
import { authOff } from '../redux/actions/auth'
import { logoName } from '../assets'
import { loveCombine1, loveCombine2 } from '../assets'
import { PageSection, PageJumbotron } from '../components/Section'
import { PrimaryButton } from '../components/Button'
import { SectionHeader } from '../components/Text'
import { getStock } from '../redux/actions/stock'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stock: [],
    }
  }

  componentDidMount() {
    this.props.authOff()
    this.getStockData()
  }

  getStockData = () => {
    this.props.getStock().then(() => {
      this.setState({ stock: this.props.stock.data })
    })
  }

  render() {
    return (
      <section className="">
        <PageJumbotron
          content={
            <Container
              content={
                <div className="flex flex-col justify-center sm:w-1/2 h-full space-y-12">
                  <div className="max-w-xs">
                    <img src={logoName} alt="logo PMI Pasaman" />
                  </div>

                  <p className="xl:w-1/2 text-white font-bold">
                    Pelayanan yang dilaksanakan oleh Palang Merah Indonesia
                    sesuai amanat Undang-Undang No.1 Tahun 2018 tentang
                    Kepalangmerahan
                  </p>
                </div>
              }
            />
          }
        />

        <PageSection
          content={
            <Container
              content={
                <div className="grid md:grid-cols-2 h-full">
                  <div className="flex flex-col h-full justify-center space-y-10">
                    <div>
                      <SectionHeader text="Visi dan Misi" />
                      <SectionHeader text="Palang Merah Indonesia" />
                    </div>
                    <div>
                      <p className="font-bold mb-5">Visi :</p>
                      <p>
                        Terwujudnya PMI yang profesional dan berintegritas serta
                        bergerak bersama masyarakat
                      </p>
                    </div>
                    <div>
                      <p className="font-bold mb-5">Misi :</p>
                      <List
                        list={[
                          'Memelihara reputasi organisasi PMI di tingkat Nasional dan Internasional',
                          'Menjadi organisasi kemanusiaan terdepan yang memberikan layanan berkualitas kepada masyarakat sesuai dengan prinsip-prinsip dasar Gerakan Palang Merah dan Bulan Sabit Merah',
                        ]}
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center h-full">
                    <div className="w-3/4">
                      <img src={loveCombine1} alt="love" />
                    </div>
                  </div>
                </div>
              }
            />
          }
        />

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgb(229 231 235)"
              fillOpacity="1"
              d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,181.3C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="bg-gray-200">
          <Container
            content={
              <div className="h-full text-center">
                <SectionHeader text="Jumlah Darah yang Tersedia" />
                <div className="grid grid-cols-2 sm:grid-cols-4 justify-center pt-10 gap-5">
                  {this.state.stock.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-center"
                      onClick={() => this.props.history.push('/stock')}
                    >
                      <BloodBox type={item.gol_darah} amount={item.total} />
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgb(229 231 235)"
              fillOpacity="1"
              d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,181.3C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>

        <Container
          content={
            <div className="grid md:grid-cols-2 h-full py-20">
              <div className="hidden md:flex items-center justify-center h-full">
                <div className="w-3/4">
                  <img src={loveCombine2} alt="love" />
                </div>
              </div>

              <div className="flex flex-col h-full justify-center space-y-10">
                <div>
                  <SectionHeader text="Ayo ikut berkontribusi sebagai pendonor" />
                </div>
                <div className="w-1/2 self-end">
                  <PrimaryButton
                    onClick={() => this.props.history.push('/signin')}
                    content={
                      <p className="text-xl text-white font-bold">Daftar</p>
                    }
                  />
                </div>
              </div>
            </div>
          }
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  stock: state.stock,
})

const mapDispatchToProps = {
  authOff,
  getStock,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
