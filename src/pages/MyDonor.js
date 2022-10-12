import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GiEmptyHourglass as Empty } from 'react-icons/gi'
import { BiCaretLeft as Back, BiCaretRight as Forward } from 'react-icons/bi'
import Container from '../components/Container'
import {
  deleteHistDonor,
  getHistory,
  getMyHistory,
} from '../redux/actions/donor'
import {
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from '../components/Table'

const MyDonor = ({ auth, donor, getMyHistory }) => {
  useEffect(() => {
    getMyHistory(auth.token)
  }, [])

  return (
    <div>
      {donor.history.length > 0 ? (
        <div className="py-40">
          <div className="overflow-x-auto">
            <table className="data-table mx-auto">
              <thead>
                <tr>
                  <FirstHeader text="No" />
                  <Header text="Lokasi" />
                  <LastHeader text="Tanggal" />
                </tr>
              </thead>

              {donor.history.map((row, idx) => (
                <tbody key={idx}>
                  <tr>
                    {Object.values(row).map((item, id) => (
                      <TableData
                        key={id}
                        column={Object.keys(row)[id]}
                        isEven={idx % 2 === 0 && true}
                        text={Object.keys(row)[id] === 'id' ? idx + 1 : item}
                      />
                    ))}
                  </tr>
                </tbody>
              ))}

              <tbody>
                <tr>
                  <Footer colspan={3} />
                </tr>
              </tbody>
            </table>
          </div>

          <Container
            content={
              <div className="flex flex-row items-center justify-center py-4">
                <button className="text-gray-800 cursor-default">
                  <Back size={24} />
                </button>
                <p>1</p>
                <button className="text-gray-800 active:text-red-900">
                  <Forward size={24} />
                </button>
              </div>
            }
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pb-10 space-y-5 h-screen">
          <Empty size={200} color="#AAAAAA" />
          <p className="text-center">Data belum tersedia.</p>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  donor: state.donor,
})

const mapDispatchToProps = { deleteHistDonor, getHistory, getMyHistory }

export default connect(mapStateToProps, mapDispatchToProps)(MyDonor)
