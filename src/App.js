import './App.css'
import { connect, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Routes from './sections/Routes'
import Loading from './components/Loading'

function App(props) {
  const { isLoading } = useSelector((state) => state.globalReducer)
  return (
    <Router>
      {props.auth.onAuth === false && <Header />}
      <Routes />
      {props.auth.onAuth === false && <Footer />}
      {isLoading && <Loading />}
    </Router>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(App)
