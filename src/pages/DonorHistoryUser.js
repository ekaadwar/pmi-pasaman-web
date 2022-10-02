import React from "react";
import { connect } from "react-redux";
import Container from "../components/Container";
import {
  ActionButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/Button";
import { MdDeleteOutline as Delete } from "react-icons/md";
import { GiEmptyHourglass as Empty } from "react-icons/gi";
import { getHistory } from "../redux/actions/donor";
import {
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from "../components/Table";
import { BiCaretLeft as Back, BiCaretRight as Forward } from "react-icons/bi";
import Donor from "../components/Donor";

class DonorHistoryUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      isDonor: false,
      isExpenditure: false,
      isStock: true,
      token: "",
    };
  }

  componentDidMount() {
    const token = this.props.auth.token;
    const url = this.getUrl();
    console.log(url);
    switch (url) {
      case "history": {
        this.setState({ isDonor: true, isExpenditure: false, isStock: false });
        let { id } = this.props.match.params;
        this.props.getHistory(token, id).then(() => {
          this.setState({ history: this.props.donor.history, token: token });
        });
        break;
      }
      case "expenditure": {
        this.setState({ isDonor: false, isExpenditure: true, isStock: false });
        break;
      }
      default: {
        this.setState({ isDonor: false, isExpenditure: false, isStock: true });
      }
    }
  }

  getUrl = () => {
    const url = this.props.match.path.split("/");
    return url[1];
  };

  toDonor = () => {
    this.setState({ isDonor: true, isExpenditure: false, isStock: false });
  };

  toStock = () => {
    this.setState({ isDonor: false, isExpenditure: false, isStock: true });
  };

  toExpenditure = () => {
    this.setState({ isDonor: false, isExpenditure: true, isStock: false });
  };

  render() {
    return (
      <section className="min-h-screen py-20">
        <div className="flex flex-row justify-center space-x-5 my-20">
          <div className="max-w-xs w-full">
            {this.state.isDonor ? (
              <PrimaryButton onClick={this.toDonor} content="Pemasukan Darah" />
            ) : (
              <SecondaryButton
                onClick={this.toDonor}
                content="Pemasukan Darah"
              />
            )}
          </div>
          <div className="max-w-xs w-full">
            {this.state.isStock ? (
              <PrimaryButton onClick={this.toStock} content="Stok Darah" />
            ) : (
              <SecondaryButton onClick={this.toStock} content="Stok Darah" />
            )}
          </div>
          <div className="max-w-xs w-full">
            {this.state.isExpenditure ? (
              <PrimaryButton
                onClick={this.toExpenditure}
                content="Pengeluaran Darah"
              />
            ) : (
              <SecondaryButton
                onClick={this.toExpenditure}
                content="Pengeluaran Darah"
              />
            )}
          </div>
        </div>

        {this.state.isDonor && <Donor history={this.state.history} />}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  donor: state.donor,
});

const mapDispatchToProps = {
  getHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorHistoryUser);
