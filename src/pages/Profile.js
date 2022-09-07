import React from "react";
import { Link } from "react-router-dom";
import { ProfileCard } from "../components/Card";
import { CircleMd } from "../components/Circle";
import Container from "../components/Container";
import { zulaikha } from "../assets";
import { FiEdit2 as Edit } from "react-icons/fi";
import { CircleButton } from "../components/Button";

const Profile = () => {
  return (
    <section className="profile pt-32 pb-20">
      <Container
        content={
          <div className="grid grid-cols-3 gap-10">
            <div>
              <ProfileCard
                content={
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <CircleMd
                        content={
                          <img
                            src={zulaikha}
                            alt="Smile Woman"
                            className="w-full"
                          />
                        }
                      />
                      <div className="absolute -bottom-2 -right-2">
                        <Link to="#">
                          <CircleButton content={<Edit color="white" />} />
                        </Link>
                      </div>
                    </div>
                    <p className="font-bold text-xl pt-5">Zulaikha</p>
                    <p className="text-sm text-gray-500">zulaikha@mail.com</p>
                    <p>25 Tahun</p>
                    <p className="font-bold text-xl">A</p>
                  </div>
                }
              />
            </div>

            <div className="col-span-2">
              <ProfileCard content={<p>Profile</p>} />
            </div>
          </div>
        }
      />
    </section>
  );
};

export default Profile;
