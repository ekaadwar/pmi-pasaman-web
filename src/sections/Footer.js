import React from "react";
import Container from "../components/Container";
import { logoName } from "../assets";
import { socialMedia } from "../dummy";
import MediaLane from "../components/MediaLane";

const Footer = () => {
  return (
    <div className="footer text-white">
      <Container
        content={
          <div className="flex flex-row justify-between py-10">
            <div className="max-w-lg space-y-5">
              <div className="w-40">
                <img
                  src={logoName}
                  alt="Palang Merah Indonesia Kabupaten Pasaman"
                />
              </div>
              <p className="max-w-xs">
                Meningkatkan ketersediaan darah yang aman, mudah dijangkau,
                berkualitas dan berkesinambungan di seluruh Indonesia
              </p>
              <p>Alamat Markas PMI Kabupaten Pasaman</p>
            </div>

            <div className="flex flex-col items-end space-y-2">
              {socialMedia.map((item, idx) => (
                <div key={idx}>
                  <MediaLane media={item.media} icon={item.icon} />
                </div>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Footer;
