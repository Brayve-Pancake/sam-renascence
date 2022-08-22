import "../scss/howItWorks.scss";
import BookBtn from "./BookBtn";
import { AdvancedImage } from "@cloudinary/react";

export default function HowItWorks({ yellowWait, xl }) {
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
            <h1 className="title">How It Works</h1>
            <p className="sub-text">
              A standard coaching package with Renascence lasts for 16 weeks.
              This is enough time to make the fundamental changes you need to
              start feeling like your own man.
              <br></br>
              <br></br>The overall theme of the coaching will be bespoke to your
              life. With the help of many excellent tools and methods, we will
              get to the core of what you want to achieve and get started on
              reaching those goals.
            </p>
            <ul className="howItWorks-ul">
              <li className="sub-text">
                <b>16 sessions</b> lasting 60 to 90 minutes each
              </li>
              <li className="sub-text">
                <b>Quality self-analysis</b>, so we both get to know the real
                you
              </li>
              <li className="sub-text">
                <b>Life analysis</b> to see where the gaps are and identify what
                you want to work on first
              </li>
              <li className="sub-text">
                <b>A short-term plan</b> spanning our time together
              </li>
              <li className="sub-text">
                <b>A medium-term plan</b> for you to develop on your own terms
              </li>
              <li className="sub-text">
                <b>A long-term plan</b> that fulfils your natural human longing
                for satisfaction, significance, and security.
              </li>
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
