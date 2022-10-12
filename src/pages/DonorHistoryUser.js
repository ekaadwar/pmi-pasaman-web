import React from "react";
import { connect } from "react-redux";
import { addExpenditure, getExpenditure } from "../redux/actions/expenditure";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import { getHistory, getMyHistory } from "../redux/actions/donor";
import { getStock } from "../redux/actions/stock";
import Donor from "../components/Donor";
import Stock from "../components/Stock";
import Expenditure from "../components/Expenditure";
import Container from "../components/Container";

class DonorHistoryUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      stock: [],
      expenditure: [],
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
      case "myhistory": {
        this.setState({ isDonor: true, isExpenditure: false, isStock: false });
        this.props.getMyHistory(token).then(() => {
          this.setState({ history: this.props.donor.history, token: token });
        });
        break;
      }
      case "expenditure": {
        console.log(token);
        this.toExpenditure(token);
        this.setState({ token });
        break;
      }
      default: {
        this.toStock(this.props.auth.token);
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

  toStock = (token) => {
    console.log(token);
    this.setState({ isDonor: false, isExpenditure: false, isStock: true });
    this.props.getStock(token).then(() => {
      this.setState({ stock: this.props.stock.data, token: token });
    });
  };

  toExpenditure = (token) => {
    this.setState({ isDonor: false, isExpenditure: true, isStock: false });
    this.props.getExpenditure(token).then(() => {
      this.setState({ expenditure: this.props.expenditure.data });
    });
  };

  submitExpenditure = (data) => {
    console.log("submit Expenditure");
  };

  render() {
    return (
      <section className="min-h-screen py-20">
        <Container
          content={
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-5 space-y-5 sm:space-y-0 my-20">
              {this.state.token &&
                (this.props.auth.userId === 1 ||
                  this.props.auth.userId === 2) && (
                  <div className="max-w-xs w-full">
                    {this.state.isDonor ? (
                      <PrimaryButton
                        onClick={this.toDonor}
                        content="Pemasukan Darah"
                      />
                    ) : (
                      <SecondaryButton
                        onClick={this.toDonor}
                        content="Pemasukan Darah"
                      />
                    )}
                  </div>
                )}

              <div className="max-w-xs w-full">
                {this.state.isStock ? (
                  <PrimaryButton content="Stok Darah" />
                ) : (
                  <SecondaryButton
                    onClick={() => this.toStock(this.props.auth.token)}
                    content="Stok Darah"
                  />
                )}
              </div>

              {this.state.token &&
                (this.props.auth.userId === 1 ||
                  this.props.auth.userId === 2) && (
                  <div className="max-w-xs w-full">
                    {this.state.isExpenditure ? (
                      <PrimaryButton content="Pengeluaran Darah" />
                    ) : (
                      <SecondaryButton
                        onClick={() => this.toExpenditure(this.state.token)}
                        content="Pengeluaran Darah"
                      />
                    )}
                  </div>
                )}
            </div>
          }
        />

        {this.state.isDonor && <Donor />}
        {this.state.isStock && <Stock />}
        {this.state.isExpenditure && <Expenditure />}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  donor: state.donor,
  expenditure: state.expenditure,
  stock: state.stock,
});

const mapDispatchToProps = {
  addExpenditure,
  getExpenditure,
  getHistory,
  getStock,
  getMyHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorHistoryUser);
