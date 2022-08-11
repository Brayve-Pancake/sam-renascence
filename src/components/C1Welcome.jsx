import Button from "react-bootstrap/Button";
export default function C1Welcome() {
  return (
    <div className="c1Welcome">
      <h1 class="display-6">Display 6</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sed
        distinctio, obcaecati non natus eligendi hic sint sapiente quia minus
        est expedita, nobis ullam! Illo ex voluptatem doloribus sed ad!
      </p>
      <div className="ratio-16x9 ratio">
        <iframe
          className="m"
          src="https://www.youtube.com/embed/vlDzYIIOYmM"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-center my-2">
        <Button bsPrefix="contact-btn" variant="dark" size="lg">
          {/* <Button variant="custom-color" size="lg"> */}
          Book Now
        </Button>
      </div>
    </div>
  );
}
