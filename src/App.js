import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Routes from "./sections/Routes";

function App(props) {
  return (
    <Router>
      {props.auth.onAuth === false && <Header />}
      <Routes />
      {props.auth.onAuth === false && <Footer />}
    </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
