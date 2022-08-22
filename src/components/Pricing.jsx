import Accordion from "react-bootstrap/Accordion";
import "../scss/pricing.scss";
import BookBtn from "./BookBtn";

export default function Pricing({ md }) {
  return (
    <div id="pricing" className="pricing jumptarget">
      <h1 className="title">Pricing</h1>
      <Accordion flush bsPrefix="accordion" defaultActiveKey="2">
        <Accordion.Item
          className="accordion-item-override1"
          // bsPrefix="accordion-item"
          eventKey="0"
        >
          <Accordion.Header bsPrefix="accordion-header">
            16-Week Package £960.
          </Accordion.Header>
          <Accordion.Body>
            <b>16 sessions</b> lasting 60 to 90 minutes each. <br></br>
            <b>Quality self-analysis</b>, so we both get to know the real you.
            <br></br>
            <b>Life analysis</b> to see where the gaps are and identify what you
            want to work on first.<br></br>
            <b>A short-term plan</b> spanning our time together.<br></br>
            <b>A medium-term plan</b> for you to develop on your own terms.
            <br></br>
            <b>A long-term plan</b> that fulfils your natural human longing for
            satisfaction, significance, and security.
            <br></br>
            <br></br>
            {!md && <BookBtn />}{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Ad Hoc Bro Sessions £40</Accordion.Header>
          <Accordion.Body>
            Once you have finished our initial coaching package, we'll know each
            other better, making coaching simpler. As such, you'll be eligible
            for ad hoc coaching at a lower rate of £40 per session. <br></br>
            <br></br>Sessions span the usual 60 to 90 minutes.
            <br></br>
            <br></br>
            {!md && <BookBtn />}{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="accordion-item-override3" eventKey="2">
          <Accordion.Header>Free Consultation</Accordion.Header>
          <Accordion.Body className="accordion-body-override3">
            Ready for a chat about it?
            <br></br>
            <br></br>
            Drop us a message using the form below, and our lead coach, Sam,
            will be in touch to arrange a 1-hour free consultation.
            <br></br>
            <br></br>
            In this session, we will discuss how Renascence can support you.
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
