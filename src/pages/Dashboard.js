import React from "react";

import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { CapitalBreakdownWidget, TopRegisteredHoldersWidget } from "../components/Widgets";
// import { DcentCLIConnector } from 'dcent-cli-connector';

export default function Dashboard() {
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