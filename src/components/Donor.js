import React, { useState } from "react";
import { connect } from "react-redux";
import { MdDeleteOutline as Delete } from "react-icons/md";
import { GiEmptyHourglass as Empty } from "react-icons/gi";
import { BiCaretLeft as Back, BiCaretRight as Forward } from "react-icons/bi";

import Modal from "./Modal";
import { ActionButton, ActionButtonGray } from "../components/Button";
import Container from "../components/Container";
import { deleteHistDonor, getHistory } from "../redux/actions/donor";
import {
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from "../components/Table";

const Donor = ({ auth, donor, deleteHistDonor, getHistory }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [idDelete, setIdDelete] = useState("");
  const [userDelete, setUserDelete] = useState("");

  const onDelete = (id, name) => {
    console.log(id);
    console.log(name);
    setDeleteModal(true);
    setIdDelete(id);
    setUserDelete(name);
  };

  const delHistDonor = () => {
    setDeleteModal(false);
    deleteHistDonor(idDelete, auth.token).then(() => {
      getHistory(auth.token);
    });
  };

  return (
    <div>
      {donor.history.length > 0 ? (
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

              {donor.history.map((row, idx) => (
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
                <button className="text-gray-800 active:text-red-900">
                  <Forward size={24} />
                </button>
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

      {deleteModal === true && (
        <Modal
          setOpenModal={() => setDeleteModal(false)}
          content={
            <div>
              <p className="align-center pb-5">
                Apakah Anda yakin ingin menghapus data {userDelete} ?
              </p>
              <div className="flex justify-between">
                <ActionButtonGray
                  onClick={() => setDeleteModal(false)}
                  content={"Batal"}
                />
                <ActionButton onClick={delHistDonor} content={"Ya"} />
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  donor: state.donor,
});

const mapDispatchToProps = { deleteHistDonor, getHistory };

export default connect(mapStateToProps, mapDispatchToProps)(Donor);
