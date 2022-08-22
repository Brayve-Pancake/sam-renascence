import "../scss/howItWorks.scss";
import BookBtn from "./BookBtn";
import { AdvancedImage } from "@cloudinary/react";

import { useMediaQuery } from "react-responsive";

export default function HowItWorks({ yellowWait }) {
  const md = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  const xl = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  return (
    <div id="howItWorks" className="howItWorks jumptarget">
      {!xl && <hr></hr>}
      <div className="backgroundImage2 ">
        {xl && (
          <div className="backgroundImage-overlay2">
            <div className=" underlay-div"></div>
            <img src="https://res.cloudinary.com/sam-renascence/image/upload/v1/images/salamander-circle-yellow_ifhgxt?_a=AJE+xWI0"></img>
            <div className="overlay-div"></div>
          </div>
        )}

        <div className="howItWorks-flex">
          <div className="howItWorks-f1">
            <h1 className="title">Coaching Package</h1>
            <p className="sub-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              sed distinctio, obcaecati non natus eligendi hic sint sapiente
              quia minus est expedita, nobis ullam! Illo ex voluptatem doloribus
              sed ad!
            </p>
            <ul className="howItWorks-ul">
              <li className="sub-text">Lorem ipsum dolor sit amet.</li>
              <li className="sub-text">Lorem ipsum dolor sit amet.</li>
              <li className="sub-text">Lorem ipsum dolor sit amet.</li>
              <li className="sub-text">Lorem ipsum dolor sit amet.</li>
              <li className="sub-text">Lorem ipsum dolor sit amet.</li>
            </ul>
            {xl && <br></br>}
            <BookBtn />
          </div>
          {xl && (
            <div className="howItWorks-f2">
              <AdvancedImage cldImg={yellowWait} />
            </div>
          )}
        </div>
        <hr></hr>
      </div>
    </div>
  );
}
