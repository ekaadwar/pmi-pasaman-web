import React from "react";
import { connect } from "react-redux";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import { getHistory } from "../redux/actions/donor";
import { getStock } from "../redux/actions/stock";
import Donor from "../components/Donor";
import Stock from "../components/Stock";

class DonorHistoryUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      stock: [],
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
        this.props.getStock(token).then(() => {
          this.setState({ stock: this.props.stock.data, token: token });
        });
      }
    }
  }

  getUrl = () => {
    const url = this.props.match.path.split("/");
    return url[1];
  };

  toDonor = () => {
    const token = this.props.auth.token;
    this.setState({ isDonor: true, isExpenditure: false, isStock: false });
    let { id } = this.props.match.params;
    this.props.getHistory(token, id).then(() => {
      this.setState({ history: this.props.donor.history, token: token });
    });
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
        {this.state.isStock && <Stock stock={this.state.stock} />}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  donor: state.donor,
  stock: state.stock,
});

const mapDispatchToProps = {
  getHistory,
  getStock,
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorHistoryUser);
