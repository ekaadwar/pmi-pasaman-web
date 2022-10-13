import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Container from '../components/Container'
import { ActionButton, ActionButtonGray } from '../components/Button'
import { MdDeleteOutline as Delete } from 'react-icons/md'
import { GiEmptyHourglass as Empty } from 'react-icons/gi'
import {
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from '../components/Table'
import { BiCaretLeft as Back, BiCaretRight as Forward } from 'react-icons/bi'
import Modal from './Modal'
import { InputProfile } from './Input'
import {
  addExpenditure,
  getExpenditure,
  deleteExpenditure,
} from '../redux/actions/expenditure'

const Expenditure = ({
  auth,
  expenditure,
  addExpenditure,
  getExpenditure,
  deleteExpenditure,
}) => {
  const [visibility, setVisibility] = useState(false)
  const [bloodGroup, setBloodGroup] = useState('')
  const [amount, setAmount] = useState(0)
  const [receiver, setReceiver] = useState('')
  const [deleteModal, setDeleteModal] = useState(false)
  const [idDelete, setIdDelete] = useState('')

  let history = useHistory()

  const onSubmit = (event) => {
    if (event.keyCode === 13) {
      submit()
    }
  }

  const submit = () => {
    const submitData = { bloodGroup, amount, receiver }
    console.log(submitData)
    addExpenditure(submitData, auth.token, history).then(() => {
      setVisibility(false)
      setBloodGroup('')
      setAmount(0)
      setReceiver('')
      getExpenditure(auth.token)
    })
  }

  const onDelete = (id) => {
    console.log(id)
    setDeleteModal(true)
    setIdDelete(id)
  }

  const delExpenditure = () => {
    setDeleteModal(false)
    deleteExpenditure(idDelete, auth.token).then(() => {
      getExpenditure(auth.token)
    })
  }

  return (
    <div>
      {expenditure.data.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="data-table mx-auto">
              <thead>
                <tr>
                  <FirstHeader text="No" />
                  <Header text="Nama" />
                  <Header text="Gol. Darah" />
                  <Header text="Penerima" />
                  <LastHeader text="Tanggal" />
                  <th></th>
                </tr>
              </thead>

              {expenditure.data.map((row, idx) => (
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
                    <td>
                      <div className="flex flex-row w-full space-x-2 items-center justify-center">
                        <ActionButton
                          onClick={() => onDelete(row.id, row.nama)}
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
                <button className="text-gray-800 cursor-default">
                  <Back size={24} />
                </button>
                <p>1</p>
                <button className="text-red-800 active:text-red-900">
                  <Forward size={24} />
                </button>
              </div>
            }
          />

          <Container
            content={
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:space-x-2 space-y-1 sm:space-y-0">
                <ActionButton
                  onClick={() => setVisibility(true)}
                  content={'Tambah Data'}
                />
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

      {visibility && (
        <Modal
          setOpenModal={setVisibility}
          content={
            <div className="space-y-5">
              <div>
                <p className="text-gray-700">Golongan Darah :</p>
                <select
                  className={`block bg-white pt-2 focus:outline-none w-full ${
                    bloodGroup === '' && 'text-gray-500'
                  }`}
                  onChange={(event) => setBloodGroup(event.target.value)}
                >
                  <option className="text-black" value="">
                    Pilih golongan darah
                  </option>
                  <option className="text-black" value="A">
                    A
                  </option>
                  <option className="text-black" value="B">
                    B
                  </option>
                  <option className="text-black" value="AB">
                    AB
                  </option>
                  <option className="text-black" value="O">
                    O
                  </option>
                </select>
              </div>

              <InputProfile
                label="Jumlah (kantong) :"
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                onKeyDown={onSubmit}
              />

              <InputProfile
                label="Penerima :"
                value={receiver}
                onChange={(event) => setReceiver(event.target.value)}
                onKeyDown={onSubmit}
              />

              <div className="flex justify-end w-full">
                <ActionButton onClick={submit} content={'Kirim'} />
              </div>
            </div>
          }
        />
      )}

      {deleteModal === true && (
        <Modal
          setOpenModal={() => setDeleteModal(false)}
          content={
            <div>
              <p className="align-center pb-5">
                Apakah Anda yakin ingin menghapus data ?
              </p>
              <div className="flex justify-between">
                <ActionButtonGray
                  onClick={() => setDeleteModal(false)}
                  content={'Batal'}
                />
                <ActionButton onClick={delExpenditure} content={'Ya'} />
              </div>
            </div>
          }
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  expenditure: state.expenditure,
})

const mapDispatchToProps = {
  addExpenditure,
  getExpenditure,
  deleteExpenditure,
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenditure)
