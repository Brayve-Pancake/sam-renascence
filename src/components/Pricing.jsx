import Accordion from "react-bootstrap/Accordion";
import "../scss/pricing.scss";
import BookBtn from "./BookBtn";

export default function Pricing({ md }) {
  return (
    <div id="pricing" className="pricing jumptarget">
      <h1 className="title">Community Driven Pricing</h1>
      <p>
        To kickstart your transformation, Renascence offer a complete coaching
        service that spans a total of 16 weeks. The bro's we help frequently
        continue on a bi-weekly basis.
      </p>
      <Accordion flush bsPrefix="accordion" defaultActiveKey="0">
        <Accordion.Item
          className="accordion-item-override1"
          // bsPrefix="accordion-item"
          eventKey="0"
        >
          <Accordion.Header bsPrefix="accordion-header">
            16 Week Package £899.
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
            {!md && <BookBtn />}{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hourly Rate £60</Accordion.Header>
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
            <br></br>
            <br></br>
            {!md && <BookBtn />}{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="accordion-item-override3" eventKey="2">
          <Accordion.Header>Free Consultation</Accordion.Header>
          <Accordion.Body className="accordion-body-override3">
            New to coaching? Not sure what to expect? Want to meet your new
            coach?
            <br></br>
            <br></br>
            {!md && <BookBtn />}{" "}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br></br>
    </div>
  );
}
