import React from "react";

import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { CapitalBreakdownWidget, TopRegisteredHoldersWidget } from "../components/Widgets";

export default () => {
    return (
        <>
        <Row>
            <Col className="mb-4">
                <CapitalBreakdownWidget></CapitalBreakdownWidget>
            </Col>

            <Col className="mb-4">
                <TopRegisteredHoldersWidget></TopRegisteredHoldersWidget>
            </Col>
        </Row>
        </>
    );
};