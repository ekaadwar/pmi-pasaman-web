import React from 'react'
import { connect } from 'react-redux'
import { MdDeleteOutline as Delete } from 'react-icons/md'
import { GiEmptyHourglass as Empty } from 'react-icons/gi'
import { BiCaretLeft as Back, BiCaretRight as Forward } from 'react-icons/bi'

import Modal from './Modal'
import { ActionButton, ActionButtonGray } from '../components/Button'
import Container from '../components/Container'
import { deleteHistDonor, getHistory } from '../redux/actions/donor'
import {
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from '../components/Table'

class Donor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteModal: false,
      idDelete: '',
      userDelete: '',
      history: [],
    }
  }

  componentDidMount() {
    console.log(this.props.donor)
  }

  onDelete = (id, name) => {
    this.setState({ deleteModal: true, idDelete: id, userDelete: name })
  }

  delHistDonor = () => {
    this.setState({ deleteModal: false })
    this.props
      .deleteHistDonor(this.state.idDelete, this.props.auth.token)
      .then(() => {
        getHistory(this.props.auth.token)
      })
  }

  changePage = (url) => {
    if (url) {
      console.log(url)
      this.props.getHistory(this.props.auth.token, null, url)
    }
  }

  render() {
    return (
      <div>
        {this.props.donor.history.length > 0 ? (
          <div>
            <div className="overflow-x-auto">
              <table className="data-table mx-auto">
                <thead>
                  <tr>
                    <FirstHeader text="No" />
                    <Header text="Nama" />
                    <Header text="Gol. Darah" />
                    <Header text="Lokasi" />
                    <LastHeader text="Tanggal" />
                    <th></th>
                  </tr>
                </thead>

                {this.props.donor.history.map((row, idx) => (
                  <tbody key={idx}>
                    <tr>
                      {Object.values(row).map((item, id) => (
                        <TableData
                          key={id}
                          column={Object.keys(row)[id]}
                          isEven={idx % 2 === 0 && true}
                          text={
                            Object.keys(row)[id] === 'id'
                              ? (this.props.donor.pageInfo.currentPage - 1) *
                                  20 +
                                (idx + 1)
                              : item
                          }
                        />
                      ))}
                      <td>
                        <div className="flex flex-row w-full space-x-2 items-center justify-center">
                          <ActionButton
                            onClick={() => this.onDelete(row.id, row.nama)}
                            content={<Delete size={20} />}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}

                <tbody>
                  <tr>
                    <Footer colspan={5} />
                  </tr>
                </tbody>
              </table>
            </div>

            <Container
              content={
                <div className="flex flex-row items-center justify-center py-4">
                  <button
                    className={
                      this.props.donor.pageInfo.prevPage
                        ? 'text-red-800 cursor-pointer'
                        : 'text-gray-800 cursor-default'
                    }
                    onClick={() =>
                      this.changePage(this.props.donor.pageInfo.prevPage)
                    }
                  >
                    <Back size={24} />
                  </button>
                  <p>{this.props.donor.pageInfo.currentPage}</p>
                  <button
                    onClick={() =>
                      this.changePage(this.props.donor.pageInfo.nextPage)
                    }
                    className={
                      this.props.donor.pageInfo.nextPage
                        ? 'text-red-800 cursor-pointer'
                        : 'text-gray-800 cursor-default'
                    }
                  >
                    <Forward size={24} />
                  </button>
                </div>
              }
            />
          </div>
        ) : (
          <div className="flex flex-col items-center pb-10 space-y-5">
            <Empty size={200} color="#AAAAAA" />
            <p>Data belum tersedia.</p>
          </div>
        )}

        {this.deleteModal === true && (
          <Modal
            setOpenModal={() => this.setState({ deleteModal: false })}
            content={
              <div>
                <p className="align-center pb-5">
                  Apakah Anda yakin ingin menghapus data {this.state.userDelete}{' '}
                  ?
                </p>
                <div className="flex justify-between">
                  <ActionButtonGray
                    onClick={() => this.setState({ deleteModal: false })}
                    content={'Batal'}
                  />
                  <ActionButton onClick={this.delHistDonor} content={'Ya'} />
                </div>
              </div>
            }
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  donor: state.donor,
})

const mapDispatchToProps = { deleteHistDonor, getHistory }

export default connect(mapStateToProps, mapDispatchToProps)(Donor)
