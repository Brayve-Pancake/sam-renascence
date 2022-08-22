import BookBtn from "./BookBtn";
import "../scss/welcome.scss";

export default function Welcome({ md, xl }) {
  return (
    <div className="backgroundImage">
      <div className="backgroundImage-overlay">
        <div id="whatWeDo" className="welcome jumptarget">
          <div className="welcome-flex">
            <div className="welcome-textbox">
              <h1 className="title">What We Do</h1>
              <p className="sub-text">
                Renascence was born out of a passion for helping bros facing
                challenging circumstances. Our private coaching helps those who
                feel lost, trapped or incomplete. Testament to our mission to
                help as many as possible, we set aside a third of our income.
                These funds support community-focused projects and allow us to
                coach bros facing financial difficulty.
              </p>
              {md && <BookBtn />}
            </div>
            {/* <br></br> */}
            {/* <div className="welcome-iframe-second">
              <div className="iframe-container ratio-16x9 ratio">
                <iframe
                  className="m"
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div> */}
          </div>
          {!md && <BookBtn />}
        </div>
      </div>
    </div>
  );
}
