import React from 'react'
// import qs from "querystring";
import { Link } from 'react-router-dom'
import {
  MdDeleteOutline as Delete,
  MdSortByAlpha as Sort,
} from 'react-icons/md'
import {
  BiCaretLeft as Back,
  BiCaretRight as Forward,
  BiSearchAlt as Search,
} from 'react-icons/bi'
import { ActionButton, ActionButtonGray, NavButton } from '../components/Button'
import Container from '../components/Container'
import {
  CheckTableRow as CheckRow,
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from '../components/Table'

import qs from 'query-string'
import { SectionHeader } from '../components/Text'
import { connect } from 'react-redux'
import { authOff } from '../redux/actions/auth'
import { deleteUser, getData, getDetails } from '../redux/actions/data'
import Modal from '../components/Modal'
import { ddmmmmyyyy } from '../helpers/date'

class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pageInfo: {},
      nextPage: `${URL}/items?page=2`,
      prevPage: null,
      token: '',
      generalBlood: '',
      optionBlood: [],
      params: {
        blood: '',
      },
      deleteModal: false,
      sortModal: false,
      categoryModal: false,
      deleteData: {},
    }
  }

  componentDidMount() {
    ddmmmmyyyy()
    const { token } = this.props.auth
    let params = {}
    if (this.props.location.search) {
      params = this.parseQuery(this.props.location.search)
    }
    this.getData(token, '', params)
  }

  componentDidUpdate(prevProps) {
    const { token } = this.props.auth
    const { params } = this.state

    if (prevProps.location.search !== this.props.location.search) {
      this.props.getData(token, '', params).then(() => {
        this.setState({
          items: this.props.data.data,
          pageInfo: this.props.data.pageInfo,
          params,
        })
      })
    }
  }

  getData = (token, page, params) => {
    this.props.getData(token, page, params).then(() => {
      this.setState({
        data: this.props.data.data,
        pageInfo: this.props.data.pageInfo,
        token: this.props.auth.token,
      })
    })
  }

  parseQuery = (str) => {
    return qs.parse(str.slice('1'))
  }

  getDetail = (event) => {
    const id = event.currentTarget.value
    this.props.getDetails(id, this.props.auth.token, this.props.history)
  }

  changePage = (event) => {
    if (event.currentTarget.value) {
      const otherPage = event.currentTarget.value.split('page')[1].slice(1)
      console.log(event.currentTarget.value)

      this.setState((prevState) => ({
        ...prevState,
        params: {
          ...prevState.params,
          page: otherPage,
        },
      }))

      let params = this.state.params

      params = {
        ...params,
        page: otherPage,
      }
      const url = this.getUrl(params)
      this.props.history.push(url)
    }
  }

  onSearch = (event) => {
    if (event.keyCode === 13) {
      this.search()
    }
  }

  search = () => {
    const { params } = this.state
    params.page && delete params.page
    let url = this.getUrl(params)
    this.props.history.push(url)
  }

  sort = (event) => {
    const sortValue = event.currentTarget.value
    this.setState((prevState) => ({
      ...prevState,
      params: {
        ...prevState.params,
        sort: sortValue,
      },
      sortModal: false,
    }))
    let { params } = this.state
    params = {
      ...params,
      sort: sortValue,
    }
    let url = this.getUrl(params)
    this.props.history.push(url)
  }

  getUrl = (params = {}) => {
    let url = '/data'

    let paramKeys = Object.keys(params)
    const paramLength = paramKeys.length

    if (paramLength > 0) {
      url += '?'
      let paramValues = Object.values(params)
      for (let i = 0; i < paramLength; i++) {
        if (i > 0) {
          url += '&'
        }
        if (paramKeys[i] === 'sort') {
          const splitSort = paramValues[i].split('-')
          paramKeys[i] = `sort[${splitSort[0]}]`
          paramValues[i] = splitSort[1]
        }
        url += `${paramKeys[i]}=${paramValues[i]}`
      }
    }

    return url
  }

  onCategory = (generalBlood, optionBlood) => {
    this.setState({
      categoryModal: true,
      generalBlood,
      optionBlood,
    })
  }

  getCategory = (category) => {
    this.setState((prevState) => ({
      ...prevState,
      params: {
        ...prevState.params,
        blood: category.toLowerCase(),
      },
      categoryModal: false,
    }))

    let params = this.state.params

    params = {
      ...params,
      blood: category.toLowerCase(),
    }
    const url = this.getUrl(params)
    this.props.history.push(url)
  }

  onDelete = (id, name) => {
    this.setState((prevState) => ({
      ...prevState,
      deleteData: {
        ...prevState.deleteData,
        id,
        name,
      },
      deleteModal: true,
    }))
  }

  onSort = () => {
    this.setState({ sortModal: true })
  }

  deleteUser = () => {
    this.setState({ deleteModal: false })
    this.props
      .deleteUser(this.state.deleteData.id, this.state.token)
      .then(() => {
        this.props.getData(this.state.token)
      })
  }

  render() {
    return (
      <section className="pt-32 pb-20">
        <Container
          content={
            <div className="mb-12">
              <SectionHeader text="Data Peserta Donor Darah" />
            </div>
          }
        />

        <Container
          content={
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center my-12 space-x-2">
              <div className="flex flex-row justify-center items-center space-x-2">
                <NavButton
                  active={this.state.params.blood === '' ? true : false}
                  onClick={() => this.getCategory('')}
                  text="All"
                />
                <NavButton
                  active={this.state.params.generalBlood === 'a' ? true : false}
                  onClick={() => this.onCategory('a', ['A', 'A+', 'A-'])}
                  text="A"
                />
                {}
                <NavButton
                  active={this.state.params.generalBlood === 'b' ? true : false}
                  onClick={() => this.onCategory('b', ['B', 'B+', 'B-'])}
                  text="B"
                />
                <NavButton
                  active={
                    this.state.params.generalBlood === 'ab' ? true : false
                  }
                  onClick={() => this.onCategory('ab', ['AB', 'AB+', 'AB-'])}
                  text="AB"
                />
                <NavButton
                  active={this.state.params.generalBlood === 'o' ? true : false}
                  onClick={() => this.onCategory('o', ['O', 'O+', 'O-'])}
                  text="O"
                />
              </div>
              <div className="flex-1 flex h-10 items-center">
                <input
                  className="h-10 w-full focus:outline-none px-5 border border-red-800 border-r-0 rounded-l-lg placeholder:text-red-400"
                  placeholder="Cari ..."
                  value={
                    this.state.params.search ? this.state.params.search : ''
                  }
                  onChange={(event) =>
                    this.setState((prevState) => ({
                      params: {
                        ...prevState.params,
                        search: event.target.value,
                      },
                    }))
                  }
                  onKeyDown={this.onSearch}
                />
                <button
                  className="h-10 w-20 flex items-center justify-center bg-red-900 active:bg-red-700 rounded-r-lg"
                  onClick={() => this.search()}
                >
                  <Search color="white" size={24} />
                </button>
              </div>
            </div>
          }
        />

        <div className="overflow-x-auto">
          <table className="data-table mx-auto">
            <thead>
              <tr>
                <th className="flex justify-center items-center px-2">
                  <ActionButton content={<Delete size={20} />} />
                </th>
                <FirstHeader text="No" />
                <Header text="Name" />
                <Header text="Alamat" />
                <Header text="Pekerjaan" />
                <Header text="Usia" />
                <Header text="No. HP" />
                <Header text="Gender" />
                <Header text="Gol. Darah" />
                <LastHeader text="Jadwal Donor" />
                <th
                  className="flex justify-center items-center"
                  onClick={this.onSort}
                >
                  <ActionButton content={<Sort size={20} />} />
                </th>
              </tr>
            </thead>
            {this.props.data.data.map((row, idx) => (
              <tbody key={idx}>
                <tr>
                  <CheckRow />
                  {Object.values(row).map((item, id) => (
                    <TableData
                      key={id}
                      column={Object.keys(row)[id]}
                      isEven={idx % 2 === 0 && true}
                      text={
                        Object.keys(row)[id] === 'id'
                          ? (this.props.data.pageInfo.currentPage - 1) * 20 +
                            (idx + 1)
                          : Object.keys(row)[id] !== 'jadwal_donor'
                          ? item
                          : item !== null
                          ? ddmmmmyyyy(new Date(item))
                          : '-'
                      }
                    />
                  ))}
                  <td>
                    <div className="flex flex-row w-full space-x-2 px-2 items-center justify-center">
                      <ActionButton
                        value={row.id}
                        content={<Search size={20} />}
                        onClick={this.getDetail}
                      />
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
                <td />
                <Footer colspan={9} />
              </tr>
            </tbody>
          </table>
        </div>

        <Container
          content={
            <div className="flex flex-row items-center justify-center py-4">
              <button
                className={
                  this.props.data.pageInfo.prevPage
                    ? 'text-red-800 cursor-pointer'
                    : 'text-gray-800 cursor-default'
                }
                value={this.props.data.pageInfo.prevPage}
                onClick={this.changePage}
              >
                <Back size={24} />
              </button>

              <p>{this.props.data.pageInfo.currentPage}</p>

              <button
                className={
                  this.props.data.pageInfo.nextPage
                    ? 'text-red-800 cursor-pointer'
                    : 'text-gray-800 cursor-default'
                }
                value={this.props.data.pageInfo.nextPage}
                onClick={this.changePage}
              >
                <Forward size={24} />
              </button>
            </div>
          }
        />

        <Container
          content={
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:space-x-2 space-y-1 sm:space-y-0">
              <ActionButton content={'Unduh Data'} />
              <ActionButton content={'Unggah Data'} />
              <Link to="/data/add">
                <ActionButton content={'Tambah Data'} />
              </Link>
            </div>
          }
        />
        {this.state.deleteModal === true && (
          <Modal
            setOpenModal={() => this.setState({ deleteModal: false })}
            content={
              <div>
                <p className="align-center pb-5">
                  Apakah Anda yakin ingin menghapus data{' '}
                  {this.state.deleteData.name} ?
                </p>
                <div className="flex justify-end space-x-2">
                  <ActionButtonGray
                    onClick={() => this.setState({ deleteModal: false })}
                    content={'Batal'}
                  />
                  <ActionButton onClick={this.deleteUser} content={'Ya'} />
                </div>
              </div>
            }
          />
        )}

        {this.state.sortModal === true && (
          <Modal
            setOpenModal={() => this.setState({ sortModal: false })}
            content={
              <div className="flex flex-col">
                <p className="text-center mb-4">Urut Berdasarkan :</p>

                <button
                  className={
                    'text-left text-gray-700 hover:text-black cursor-pointer bg-gray-100 p-2 border-y border-gray-200'
                  }
                  value={'nama-asc'}
                  onClick={this.sort}
                >
                  <p>Nama (A-Z)</p>
                </button>

                <button
                  className={
                    'text-left text-gray-700 hover:text-black cursor-pointer p-2 border-y border-gray-200'
                  }
                  value={'nama-desc'}
                  onClick={this.sort}
                >
                  <p>Nama (Z-A)</p>
                </button>

                <button
                  className={
                    'text-left text-gray-700 hover:text-black cursor-pointer bg-gray-100 p-2 border-y border-gray-200'
                  }
                  value={'jadwal_donor-asc'}
                  onClick={this.sort}
                >
                  <p>Jadwal Donor (A-Z)</p>
                </button>

                <button
                  className={
                    'text-left text-gray-700 hover:text-black cursor-pointer p-2 border-b border-gray-200'
                  }
                  value={'jadwal_donor-desc'}
                  onClick={this.sort}
                >
                  <p>Jadwal Donor (Z-A)</p>
                </button>
              </div>
            }
          />
        )}

        {this.state.categoryModal && (
          <Modal
            setOpenModal={() => this.setState({ categoryModal: false })}
            content={
              <div>
                {this.state.optionBlood.map((item, id) => (
                  <button
                    key={id}
                    value={item}
                    onClick={(e) => this.getCategory(e.currentTarget.value)}
                    className="flex items-center justify-left cursor-pointer space-x-3 w-20 h-8 px-3 hover:bg-gray-200"
                  >
                    <div>
                      <div className="w-3 h-3 rounded-full bg-gray-500" />
                    </div>
                    <p>{item}</p>
                  </button>
                ))}
              </div>
            }
          />
        )}
      </section>
    )
  }
}

const mapDispatchToProps = {
  authOff,
  getData,
  getDetails,
  deleteUser,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  data: state.data,
})

export default connect(mapStateToProps, mapDispatchToProps)(Data)
