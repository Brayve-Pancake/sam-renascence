import Button from "react-bootstrap/Button";
import "../scss/welcome.scss";

export default function Welcome() {
  return (
    <div className="backgroundImage">
      <div className="backgroundImage-overlay">
        <div id="whatWeDo" className="welcome jumptarget">
          <div className="welcome-textbox">
            <h1 className="title">What We Do</h1>
            <p className="sub-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              sed distinctio, obcaecati non natus eligendi hic sint sapiente
              quia minus est expedita, nobis ullam! Illo ex voluptatem doloribus
              sed ad!
            </p>
          </div>
          <br></br>
          <div className="ratio-16x9 ratio">
            <iframe
              className="m"
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center">
            <Button bsPrefix="contact-btn" variant="dark" size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
