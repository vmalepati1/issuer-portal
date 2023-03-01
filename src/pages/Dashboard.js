import React from "react";

import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { CapitalBreakdownWidget, TopRegisteredHoldersWidget } from "../components/Widgets";
const dcent = require('dcent-web-connector');

export default () => {
    function handleDCENT() {
        dcent
        .info()
        .then(
            response => {
                console.log("Hello");
                console.log(response);
            }
        ).catch(error => {
            console.log("Authentication error:", error);
        });
    }

    return (
        <>
        <Row>
            <Col className="mb-4">
                <CapitalBreakdownWidget></CapitalBreakdownWidget>
            </Col>

            <Col className="mb-4">
                <TopRegisteredHoldersWidget></TopRegisteredHoldersWidget>
            </Col>

            <button className="btn btn-default" onClick={handleDCENT}>Test DCENT</button>
        </Row>
        </>
    );
};