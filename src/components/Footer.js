import React from "react";
import { BsFillEnvelopeOpenFill } from "@react-icons/all-files/bs/BsFillEnvelopeOpenFill";
import { BsBookHalf } from "@react-icons/all-files/bs/BsBookHalf";
import { BsPhone } from "@react-icons/all-files/bs/BsPhone";
import { useHistory } from "react-router-dom";
const Footer = () => {
  const history = useHistory();
  const followLink = () => {
    history.push("/guide");
  };

  const Emailed = () => {
    window.location.href = "mailto:guardianconnectsupport@guardianfueltech.com";
  };

  const phoneCall = () => {
    window.open("tel:9044957480");
  };
  return (
    <div class="footer">
      <button className="phone">
        <a href="tel:9044957480">
          <div className="phonetext">
            <BsPhone />
          </div>
          <div className="phonetext">Call</div>
          <div className="phonetext">Guardian Connect</div>
        </a>
      </button>
      <button className="book" onClick={followLink}>
        <div class="booktext">
          <BsBookHalf />
        </div>
        <div class="booktext">Insite 360</div>
        <div class="booktext">Guides</div>
      </button>
      <button class="email" onClick={Emailed}>
        <div className="emailtext">
          <BsFillEnvelopeOpenFill />
        </div>
        <div className="emailtext">Email</div>
        <div className="emailtext">Guardian Connect</div>
      </button>
    </div>
  );
};

export default Footer;
