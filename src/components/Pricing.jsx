import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "../scss/pricing.scss";

export default function Pricing() {
  return (
    <div className="container px-4 mt-3 container1">
      <hr></hr>
      <h1 className="display-6 title1">Community Driven Pricing</h1>
      <p>
        To kickstart your transformation, Renascence offer a complete coaching
        service that spans a total of 16 weeks. The bro's we help frequently
        continue on a bi-weekly basis.
      </p>
      <Accordion bsPrefix="accordion" defaultActiveKey="0">
        <Accordion.Item bsPrefix="accordion-item" eventKey="0">
          <Accordion.Header bsPrefix="accordion-header">
            16 weeks of coaching £899.
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            <br></br>
            <div className="text-center my-2">
              <Button>
                {/* <Button variant="custom-color" size="lg"> */}
                Book Now
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hourly rate £60</Accordion.Header>
          <Accordion.Body>
            Hourly sessions are best for those who have already formed a
            foundational relationship with Renasence.
            <br></br>
            The hourly rate includes:
            <br></br>
            1hr live coaching session
            <br></br>A behind the scenes summarisation
            <br></br>
            Personalised session organisation
            <br></br>
            Resource creation
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Free Initial Consultation</Accordion.Header>
          <Accordion.Body>
            New to coaching? Not sure what to expect? Want to meet your new
            coach?
            <br></br>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br></br>
      <div className="text-center my-2">
        <Button bsPrefix="contact-btn" variant="dark" size="lg">
          {/* <Button variant="custom-color" size="lg"> */}
          Book Now
        </Button>
      </div>
      <hr></hr>
    </div>
  );
}
