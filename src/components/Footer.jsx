import "../scss/footer.scss";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="footer">
      <hr></hr>
      <div className="socials">
        <div className="social-icons">
          <SocialIcon
            url="https://www.instagram.com/renascencecic/?hl=en"
            bgColor="#222222"
            fgColor="#eae9e9"
          />
          <SocialIcon
            url="https://twitter.com/renacoaching"
            bgColor="#222222"
            fgColor="#eae9e9"
          />
        </div>
        <a href="mailto:sam@renascence-coaching.com">
          sam@renascence-coaching.com
        </a>
      </div>
      <br></br>
      <div className="footer-text">
        Website Development by{" "}
        <a href="https://github.com/Brayve-Pancake">BRAY</a>
      </div>
      <br></br>
    </div>
  );
}
