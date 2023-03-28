
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartArea, faChartBar, faChartLine, 
         faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faUserPlus,
         faExternalLinkAlt, faLandmark, faBook, faShieldAlt, faEnvelopeOpenText,
         faScroll, faDownload, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Image, Button, ListGroup, ProgressBar, Form, InputGroup, Pagination } from '@themesberg/react-bootstrap';
import Flags from 'country-flag-icons/react/3x2';
import { CircleChart } from "./Charts";
import { faDesktop, faMobileAlt, faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { Badge } from '@themesberg/react-bootstrap';
import { Table } from '@themesberg/react-bootstrap';

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
export const CapitalBreakdownWidget = (props) => {
  let companyName = props.companyName;
  let className = props.class;
  let parValue = props.par;

  let sharesOutstanding = props.sharesOutstanding.toLocaleString("en-US");
  let sharesAtDTC = props.sharesAtDTC.toLocaleString("en-US");
  let treasuryShares = props.treasuryShares.toLocaleString("en-US");
  let restrictedShares = props.restrictedShares.toLocaleString("en-US");
  let reservedShares = props.reservedShares.toLocaleString("en-US");
  let authorizedShares = props.authorizedShares.toLocaleString("en-US");

  let dsppShares = props.dsppShares.toLocaleString("en-US");
  let pendingIPOShares = props.pendingIPOShares.toLocaleString("en-US");
  let regAShares = props.regAShares.toLocaleString("en-US");
  let regCFShares = props.regCFShares.toLocaleString("en-US");
  let privatePlacementShares = props.privatePlacementShares.toLocaleString("en-US");
  let shelfShares = props.shelfShares.toLocaleString("en-US");

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
            statNumber={sharesOutstanding}
            displayLink={true}
          ></CapitalBreakdownStat>

          <CapitalBreakdownStat 
            statIcon={faLandmark} 
            statName={"shares at DTC"}
            statNumber={sharesAtDTC}
            displayLink={true}
          ></CapitalBreakdownStat>

          <CapitalBreakdownStat 
            statIcon={faBook} 
            statName={"treasury shares"}
            statNumber={treasuryShares}
            displayLink={true}
          ></CapitalBreakdownStat>

<         CapitalBreakdownStat 
            statIcon={faShieldAlt} 
            statName={"restricted shares"}
            statNumber={restrictedShares}
            displayLink={false}
          ></CapitalBreakdownStat>

<         CapitalBreakdownStat 
            statIcon={faEnvelopeOpenText} 
            statName={"reserved shares"}
            statNumber={reservedShares}
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
            statNumber={authorizedShares}
            displayLink={true}
          ></CapitalBreakdownStat>
        </div>
      </Card.Body>
    </Card>
  );
};

// https://stackoverflow.com/questions/65681881/react-dynamic-use-of-country-flag-icons-library
const HolderWidget = (props) => {
  const Flag = Flags[props.nationCode];

  return (
    <div className="d-flex w-90 fixed-stat">
      <Flag title={props.nationCode} className="... flag align-self-end mb-2 ms-5"/>
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
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223" nationCode="IN"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012" nationCode="US"></HolderWidget>
            </Col>
          </Row>

          <Row className="mt-1 mb-1">
            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223" nationCode="US"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012" nationCode="US"></HolderWidget>
            </Col>
          </Row>

          <Row className="mt-1 mb-1">
            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223" nationCode="US"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012" nationCode="US"></HolderWidget>
            </Col>
          </Row>

          <Row className="mt-1 mb-1">
            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223" nationCode="US"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012" nationCode="US"></HolderWidget>
            </Col>
          </Row>

          <Row className="mt-1 mb-1">
            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223" nationCode="US"></HolderWidget>
            </Col>

            <Col col="d-flex justify-content-center align-items-center">
              <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012" nationCode="US"></HolderWidget>
            </Col>
          </Row>

          <div className="collapse multi-collapse" id="collapsedShareholders">
            <Row className="mt-1 mb-1">
              <Col col="d-flex justify-content-center align-items-center">
                <HolderWidget name="Vanguard Trust" numShares="3,290" percent="0.01223" nationCode="US"></HolderWidget>
              </Col>

              <Col col="d-flex justify-content-center align-items-center">
                <HolderWidget name="FMR Co" numShares="1,290" percent="0.01012" nationCode="US"></HolderWidget>
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

const HolderDetailsWidget = (props) => {
  const Flag = Flags[props.nationCode];

  return (
    <>
      <div className="d-flex w-90 fixed-stat my-2">
        <Flag title={props.nationCode} className="... flag align-self-center"/>
        <h5 class="align-self-center m-0 p-0 ms-4">{props.holderName}</h5>
        <div className="d-block ms-auto">
          <Row className="text-right">
            <Col>
              <label>{props.quantityAndUnits}</label>
              <label class="ms-3 bold-name">{props.percentOwned}</label>
              <button type="button" class="btn px-1 py-0">
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
              </button>
            </Col>
          </Row>

          <Row className="text-right">
            <label>{props.holderAddress}</label>
          </Row>
        </div>
      </div>
    </>
  );
};

export const HolderListWidget = (props) => {
  const [activeItem, setActiveItem] = React.useState(2);

  const totalPages = 5;
  const size = "md";
  const disablePrev = false;

  const onPrevItem = () => {
    const prevActiveItem = activeItem === 1 ? activeItem : activeItem - 1;
    setActiveItem(prevActiveItem);
  };

  const onNextItem = (totalPages) => {
    const nextActiveItem = activeItem === totalPages ? activeItem : activeItem + 1;
    setActiveItem(nextActiveItem);
  };

  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    const isItemActive = activeItem === number;

    const handlePaginationChange = () => {
      setActiveItem(number);
    };

    items.push(
      <Pagination.Item active={isItemActive} key={number} onClick={handlePaginationChange}>
        {number}
      </Pagination.Item>
    );
  };

  return (
    <>
      <Card border="light" className="shadow-sm shadow-sm">
        <Card.Header>
          <div class="d-flex holder-header">
            <div className="d-flex align-items-center left-search-bar">
              <Form className="form-inline">
                <Form.Control type="text" placeholder="Name" />
              </Form>
            </div>

            <div class="center-holder-title">
              <h4 className="center-block text-center p-0 m-0">Class A Stockholders</h4>
            </div>

            <div class="right-download">
              <button type="button" class="btn d-flex justify-content-end align-items-center">
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>

          </div>
        </Card.Header>

        <Card.Body>
          <div className="d-block">
            <HolderDetailsWidget nationCode="US" holderName="Cede & Co." quantityAndUnits="264,136.65145 DEMO" percentOwned="81.223%" holderAddress="P.O. Box 982903, El Paso, TX 79998-2903, United States"></HolderDetailsWidget>
            <HolderDetailsWidget nationCode="US" holderName="Cede & Co." quantityAndUnits="264,136.65145 DEMO" percentOwned="81.223%" holderAddress="P.O. Box 982903, El Paso, TX 79998-2903, United States"></HolderDetailsWidget>
            <HolderDetailsWidget nationCode="US" holderName="Cede & Co." quantityAndUnits="264,136.65145 DEMO" percentOwned="81.223%" holderAddress="P.O. Box 982903, El Paso, TX 79998-2903, United States"></HolderDetailsWidget>
            <HolderDetailsWidget nationCode="US" holderName="Cede & Co." quantityAndUnits="264,136.65145 DEMO" percentOwned="81.223%" holderAddress="P.O. Box 982903, El Paso, TX 79998-2903, United States"></HolderDetailsWidget>
            <HolderDetailsWidget nationCode="US" holderName="Cede & Co." quantityAndUnits="264,136.65145 DEMO" percentOwned="81.223%" holderAddress="P.O. Box 982903, El Paso, TX 79998-2903, United States"></HolderDetailsWidget>
            <HolderDetailsWidget nationCode="US" holderName="Cede & Co." quantityAndUnits="264,136.65145 DEMO" percentOwned="81.223%" holderAddress="P.O. Box 982903, El Paso, TX 79998-2903, United States"></HolderDetailsWidget>
            <HolderDetailsWidget nationCode="US" holderName="Cede & Co." quantityAndUnits="264,136.65145 DEMO" percentOwned="81.223%" holderAddress="P.O. Box 982903, El Paso, TX 79998-2903, United States"></HolderDetailsWidget>
            <Pagination size={size} className="mt-3 pagination justify-content-center">
              <Pagination.Prev disabled={disablePrev} onClick={onPrevItem}>Previous</Pagination.Prev>
              {items}
              <Pagination.Next onClick={() => onNextItem(totalPages)}>Next</Pagination.Next>
            </Pagination>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export const CircleChartWidget = (props) => {
  const { title, data = [] } = props;
  const labels = data.map(d => d.label);
  const series = data.map(d => d.value);

  return (
    <Col>
      <div class="d-flex align-items-center flex-row justify-content-center">
        <CircleChart series={series} labels={labels}/>
      </div>

      <div class="d-flex align-items-center flex-row justify-content-center">
        <div>
          <h5 className="mt-2 text-center">{title}</h5>

          {data.map(d => (
            <h6 key={`circle-element-${d.id}`} className="fw-normal text-white">
              { (d.icon != null) 
                ? <FontAwesomeIcon icon={d.icon} className={`icon icon-xs text-${d.color} w-20 me-1`} />
                : <></>
              }
              {` ${d.label} `}{`${d.value}%`}
            </h6>
          ))}
        </div>
      </div>
    </Col>
  );
};

export const RegisteredTrendsWidget = (props) => {
  const stateData = [
      { id: 1, label: "Wyoming", value: 60, color: "secondary", icon: null },
      { id: 2, label: "South Carolina", value: 30, color: "tertiary", icon: null },
      { id: 3, label: "Georgia", value: 1, color: "primary", icon: null },
      { id: 4, label: "New Hampshire", value: 1, color: "secondary", icon: null },
      { id: 5, label: "Connecticut", value: 1, color: "tertiary", icon: null },
      { id: 6, label: "California", value: 1, color: "primary", icon: null },
      { id: 7, label: "Washington", value: 1, color: "secondary", icon: null },
      { id: 8, label: "Illinois", value: 1, color: "tertiary", icon: null },
      { id: 9, label: "Michigan", value: 4, color: "primary", icon: null }
  ];

  const holderTypeData = [
    { id: 1, label: "US Individual", value: 80, color: "secondary", icon: null },
    { id: 2, label: "US Corporate", value: 10, color: "tertiary", icon: null },
    { id: 3, label: "US Other", value: 10, color: "primary", icon: null }
  ];

  return (
    <Card border="light" className="shadow-sm text-white bg-primary">
      <Card.Header>
        <h4 className="center-block text-center">Registered Trends</h4>
      </Card.Header>

      <Card.Body class="p-0">
        <div className="d-flex align-items-center flex-column justify-content-center chart-container">
          <div>
            <CircleChartWidget
                  title="State"
                  data={stateData} />
          </div>

          <div className="my-4">
            <CircleChartWidget
                  title="Holder Type"
                  data={holderTypeData} />
          </div>

        </div>
      </Card.Body>
    </Card>
  );
}

export const ActivityWidget = (props) => {
  return (
    <>
      <Card border="light" className="shadow-sm shadow-sm">
        <Card.Header>
          <div class="d-flex justify-content-between">
            <div className="align-self-center">
              <h4 className="center-block text-center p-0 m-0">Class A Stock</h4>
            </div>

            <Row className="align-self-center">
              <Col className="d-flex justify-content-center align-items-center">
                <Badge bg="tertiary">Transfers</Badge>
              </Col>
              
              <Col className="d-flex justify-content-center align-items-center">
                <Badge bg="tertiary">Trades</Badge>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
                <Badge bg="tertiary">Options</Badge>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
                <Badge bg="tertiary">Conversions</Badge>
              </Col>
            </Row>

          </div>
        </Card.Header>

        <Card.Body>
          <Table responsive>
            <thead className="thead-light">
              <tr>
                <th className="border-0">Date</th>
                <th className="border-0">Activity</th>
                <th className="border-0">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-0 fw-bold">
                  Apr. 23, 2023
                </td>
                <td className="border-0">Mike Smith transfered 31.57 DEMO to Charlie Mark</td>
                <td className="border-0">
                  <button type="button" class="btn px-1 py-0">
                    <FontAwesomeIcon icon={faExternalLinkAlt}/>
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

export const InsightsWidget = (props) => {
  return (
    <>
      <Card border="light" className="shadow-sm text-white bg-primary">
        <Card.Header>
          <h4 className="center-block text-center">Insights</h4>
        </Card.Header>

        <Card.Body>
          <div className="d-flex">
            <h5>Transfers over 1 month: 39</h5>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}