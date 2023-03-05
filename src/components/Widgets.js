
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartArea, faChartBar, faChartLine, 
         faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faUserPlus,
         faExternalLinkAlt, faLandmark, faBook, faShieldAlt, faEnvelopeOpenText,
         faScroll } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';
import { US, FR } from 'country-flag-icons/react/3x2';

const CapitalBreakdownStat = (props) => {
  let link;

  if (props.displayLink) {
    link =
      <Card.Link href="#top" className="text-quaternary fw-bold align-self-center text-center text-md-end">
        <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
      </Card.Link>;
  } else {
    link =
      <Card.Link href="#top" className="invisible text-quaternary fw-bold align-self-center text-center text-md-end">
        <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
      </Card.Link>;
  }

  return (
    <div className="d-flex w-75 fixed-stat">
      <div className="d-inline-block align-self-center">
        <FontAwesomeIcon icon={props.statIcon} size="lg"/>
      </div>
      <div className="d-block ms-auto">
        <div className="d-flex flex-column align-items-end">
          <h4 className="mb-0 text-right">{props.statNumber}</h4>
          <label className="mb-0 d-block text-right">{props.statName}</label>
        </div>
      </div>
      {link}
    </div>
  );
};

// https://stackoverflow.com/questions/44382317/how-can-we-display-backend-data-in-react-js
// Functional component
export const CapitalBreakdownWidget = () => {
  const [companyName, setCompanyName] = useState("Example Company");
  const [className, setClassName] = useState("A");
  const [parValue, setParValue] = useState("$0.0001");

  return (
    <Card border="light" className="shadow-sm text-white bg-primary">
      <Card.Header>
        <h4 className="center-block text-center">{companyName} Stock</h4>
        <h5 className="center-block text-center">Class {className}, {parValue} par </h5>
      </Card.Header>

      <Card.Body>
        <div className="d-flex align-items-center flex-column">

          <CapitalBreakdownStat 
            statIcon={faChartLine} 
            statName={"shares outstanding"}
            statNumber={"384,290"}
            displayLink={true}
          ></CapitalBreakdownStat>

          <CapitalBreakdownStat 
            statIcon={faLandmark} 
            statName={"shares at DTC"}
            statNumber={"333,179.43"}
            displayLink={true}
          ></CapitalBreakdownStat>

          <CapitalBreakdownStat 
            statIcon={faBook} 
            statName={"treasury shares"}
            statNumber={"25,555.285"}
            displayLink={true}
          ></CapitalBreakdownStat>

<         CapitalBreakdownStat 
            statIcon={faShieldAlt} 
            statName={"restricted shares"}
            statNumber={"25,555.285"}
            displayLink={false}
          ></CapitalBreakdownStat>

<         CapitalBreakdownStat 
            statIcon={faEnvelopeOpenText} 
            statName={"reserved shares"}
            statNumber={"18,600"}
            displayLink={false}
          ></CapitalBreakdownStat>

          <div className="d-flex w-75">
            <div className="d-block ms-auto">
              <label className="mb-0">18,600 in employee plan pool</label>
            </div>
            <Card.Link href="#top" className="text-quaternary fw-bold">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </Card.Link>
          </div>

          <div className="d-flex w-75">
            <div className="d-block ms-auto">
              <label className="mb-0">600 in private placement pool</label>
            </div>
            <Card.Link href="#top" className="text-quaternary fw-bold">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </Card.Link>
          </div>

          <CapitalBreakdownStat 
            statIcon={faScroll} 
            statName={"authorized shares"}
            statNumber={"592,555"}
            displayLink={true}
          ></CapitalBreakdownStat>
        </div>
      </Card.Body>
    </Card>
  );
};

const HolderWidget = (props) => {
  return (
    <div className="d-flex w-90 fixed-stat">
      <US title="United States" className="... flag align-self-end mb-1 ms-5"/>
      <div className="d-block ms-auto">
        <label className="mb-0 d-block text-right bold-name">{props.name}</label>
        <label className="mb-0 d-block text-right">{props.numShares} shares</label>
        <label className="mb-0 d-block text-right">({(props.percent * 100).toFixed(3)}%)</label>
      </div>
    </div>
  );
};

export const TopRegisteredHoldersWidget = () => {
  return (
    <Card border="light" className="shadow-sm shadow-sm">
      <Card.Header>
        <h4 className="center-block text-center">Top Registered Holders</h4>
      </Card.Header>

      <Card.Body>
        <div className="d-block">
          <Row className="mt-1 mb-1">
            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012"></HolderWidget>
            </Col>
          </Row>

          <Row className="mt-1 mb-1">
            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012"></HolderWidget>
            </Col>
          </Row>

          <Row className="mt-1 mb-1">
            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012"></HolderWidget>
            </Col>
          </Row>

          <Row className="mt-1 mb-1">
            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012"></HolderWidget>
            </Col>
          </Row>

          <Row className="mt-1 mb-1">
            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012"></HolderWidget>
            </Col>
          </Row>

          <div className="collapse multi-collapse" id="collapsedShareholders">
            <Row className="mt-1 mb-1">
              <Col col="d-flex justify-content-center align-items-center">
                <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223"></HolderWidget>
              </Col>

              <Col col="d-flex justify-content-center align-items-center">
                <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012"></HolderWidget>
              </Col>
            </Row>
          </div>

          <button className="btn btn-secondary centered-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedShareholders" aria-expanded="false" aria-controls="collapsedShareholders">
            View All
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}