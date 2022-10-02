import React from "react";
import { connect } from "react-redux";
import Container from "../components/Container";
import { SectionHeader } from "../components/Text";
import { ActionButton } from "../components/Button";
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

class DonorHistoryUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      token: "",
    };
  }

  componentDidMount() {
    const token = this.props.auth.token;
    const { id } = this.props.match.params;
    console.log(id);
    this.props.getHistory(token, id).then(() => {
      this.setState({ history: this.props.donor.history, token: token });
    });
  }

  render() {
    return (
      <section className="min-h-screen pt-32 pb-20">
        <Container
          content={
            <div className="mb-12">
              <SectionHeader text="Data Riwayat Donor" />
            </div>
          }
        />

        {this.state.history.length > 0 ? (
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

                {this.state.history.map((row, idx) => (
                  <tbody key={idx}>
                    <tr>
                      {Object.values(row).map((item, id) => (
                        <TableData
                          key={id}
                          column={Object.keys(row)[id]}
                          isEven={idx % 2 === 0 && true}
                          text={Object.keys(row)[id] === "id" ? idx + 1 : item}
                        />
                      ))}
                      <td>
                        <div className="flex flex-row w-full space-x-2 items-center justify-center">
                          <ActionButton content={<Delete size={20} />} />
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
          </div>
        ) : (
          <div className="flex flex-col items-center pb-10 space-y-5">
            <Empty size={200} color="#AAAAAA" />
            <p>User belum melakukan donor.</p>
          </div>
        )}
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
