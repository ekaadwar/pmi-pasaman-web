import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Routes from "./sections/Routes";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
