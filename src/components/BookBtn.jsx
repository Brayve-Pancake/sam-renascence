import "../scss/bookBtn.scss";
import Button from "react-bootstrap/Button";

export default function BookBtn() {
  return (
    <div className="text-center">
      <Button href="#contact" bsPrefix="contact-btn" variant="dark" size="lg">
        Contact Us
      </Button>
    </div>
  );
}
