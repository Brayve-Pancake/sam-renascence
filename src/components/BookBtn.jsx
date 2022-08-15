import "../index.scss";
import Button from "react-bootstrap/Button";

export default function BookBtn() {
  return (
    <div className="text-center">
      <Button bsPrefix="contact-btn" variant="dark" size="lg">
        Book Now
      </Button>
    </div>
  );
}
