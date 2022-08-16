import BookBtn from "./BookBtn";
import "../scss/welcome.scss";

// pass in the mediaquery prop is Desktop and tablet
// Tablet keep 5vw
// Desktop use 10vw
// flex the `welcome` box
// gap betwren flex 5vw
// contidtionally render in the new button and out the old

export default function Welcome({ md, xl }) {
  return (
    <div className="backgroundImage">
      <div className="backgroundImage-overlay">
        <div id="whatWeDo" className="welcome jumptarget">
          <div className="welcome-flex">
            <div className="welcome-textbox">
              <h1 className="title">What We Do</h1>
              <p className="sub-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                sed distinctio, obcaecati non natus eligendi hic sint sapiente
                quia minus est expedita, nobis ullam! Illo ex voluptatem
                doloribus sed ad!
              </p>
              {/* {md && <BookBtn />} */}
            </div>
            <br></br>
            <div className="welcome-iframe-second">
              <div className="iframe-container ratio-16x9 ratio">
                <iframe
                  className="m"
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <BookBtn />
        </div>
      </div>
    </div>
  );
}
