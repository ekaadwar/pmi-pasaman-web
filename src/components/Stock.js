import React, { useEffect, useState } from 'react'
import Container from './Container'
import BloodBox from '../components/BloodBox'
import {
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from '../components/Table'
import { ActionButton, ActionButtonGray } from '../components/Button'
import { connect } from 'react-redux'
import Modal from './Modal'
import { getStock, updateStock } from '../redux/actions/stock'
import { typeConverter } from '../helpers/bloodConverter'

const Stock = ({ stock, auth, getStock, updateStock }) => {
  const [input, setInput] = useState(false)
  const [data, setData] = useState([])
  // const [labels, setLabels] = useState([])
  // const [values, setValues] = useState([])

  useEffect(() => {
    if (stock.data.length > 0) {
      setData(stock.data)
    } else {
      getStockData()
    }
  }, [])

  const getStockData = () => {
    getStock().then(() => {
      let labels = []
      let values = []
      stock.data.map((items) => {
        labels.push(typeConverter(items.gol_darah))
        values.push(items.total)
        console.log(typeConverter(items.gol_darah))
      })
      console.log('oke')
      console.log(labels)
      console.log(values)
      setData(stock.data)
    })
  }

  const changeInput = (event, id, input) => {
    if (event.target.value >= 0) {
      let newArray = [...data]
      if (input === 'income') {
        newArray[id].masuk = Number(event.target.value)
      }
      if (input === 'expenditure') {
        newArray[id].keluar = Number(event.target.value)
      }
      setData(newArray)
    } else {
      window.alert('Data yang dimasukan tidak boleh bernilai negatif.')
    }
  }

  const onSubmit = (event) => {
    if (event.keyCode === 13) {
      submit()
    }
  }

  const submit = () => {
    let alert = false
    let bloodGroup = []
    let income = []
    let expenditure = []

    let dataCollabs

    data.map((items) => {
      const range = items.masuk - items.keluar
      if (range < 0) {
        alert = true
      }
      bloodGroup = [...bloodGroup, items.gol_darah]
      income = [...income, items.masuk]
      expenditure = [...expenditure, items.keluar]
      dataCollabs = { alert, bloodGroup, income, expenditure }
      return dataCollabs
    })
    updateStock(dataCollabs, auth.token).then(() => {
      getStockData()
    })
    setInput(false)
  }

  const cancel = () => {
    setData(stock.data)
    setInput(false)
  }

  return (
    <div className="mb-20 space-y-20">
      <Container
        content={
          <div className="flex justify-center h-full text-center">
            <div className="grid grid-flow-col grid-cols-2 sm:grid-cols-4 grid-rows-6 sm:grid-rows-3 justify-center gap-5 max-w-2xl w-full">
              {data.map((item, idx) => (
                <div key={idx} className="flex justify-center">
                  <BloodBox
                    type={typeConverter(item.gol_darah)}
                    amount={item.total}
                  />
                </div>
              ))}
            </div>
          </div>
        }
      />

      <div>
        <div className="overflow-x-auto">
          <table className="data-table mx-3 sm:mx-10 xl:mx-auto">
            <thead>
              <tr>
                <FirstHeader text="No" />
                <Header text="Gol. Darah" />
                <Header text="Pemasukan" />
                <Header text="Pengeluaran" />
                <LastHeader text="Total" />
              </tr>
            </thead>

            {data.length > 0 &&
              data.map((row, idx) => (
                <tbody key={idx}>
                  <tr>
                    {Object.values(row).map((item, id) => (
                      <TableData
                        key={id}
                        column={Object.keys(row)[id]}
                        isEven={idx % 2 === 0 && true}
                        text={
                          Object.keys(row)[id] === 'id'
                            ? idx + 1
                            : Object.keys(row)[id] === 'gol_darah'
                            ? typeConverter(item)
                            : item
                        }
                      />
                    ))}
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
            <div className="flex justify-end mt-5">
              {auth.token && (auth.userId === 1 || auth.userId === 2) && (
                <ActionButton
                  onClick={() => setInput(true)}
                  content={'Ubah Data'}
                />
              )}
            </div>
          }
        />
      </div>

      {input && (
        <Modal
          setOpenModal={setInput}
          content={
            <div className="scroll-hidden flex flex-col space-y-8 overflow-y-auto h-96">
              <p className="text-center font-bold text-xl">Update Stock Data</p>
              {data.map((items, idx) => (
                <div key={idx} className="flex flex-col space-y-2">
                  <p className="text-gray-700 font-bold">
                    Golongan Darah {items.gol_darah}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:-space-y-0">
                    <div>
                      <p className="text-gray-700">masuk :</p>
                      <input
                        className="py-2 border-b border-gray-700 bg-white focus:outline-none "
                        placeholder={'Masuk'}
                        type={'number'}
                        value={items.masuk}
                        onChange={(event) => changeInput(event, idx, 'income')}
                        onKeyDown={onSubmit}
                      />
                    </div>
                    <div>
                      <p className="text-gray-700">keluar :</p>
                      <input
                        className="py-2 border-b border-gray-700 bg-white focus:outline-none "
                        placeholder={'Keluar'}
                        type={'number'}
                        value={items.keluar}
                        onChange={(event) =>
                          changeInput(event, idx, 'expenditure')
                        }
                        onKeyDown={onSubmit}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row sm:justify-end sm:space-x-5 space-y-2 sm:space-y-0">
                <ActionButtonGray onClick={cancel} content={'Batal'} />
                <ActionButton onClick={submit} content={'Ubah Data'} />
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
  stock: state.stock,
})

const mapDispatchToProps = {
  getStock,
  updateStock,
}

export default connect(mapStateToProps, mapDispatchToProps)(Stock)
