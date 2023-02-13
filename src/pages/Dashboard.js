import React from "react";

import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { CapitalBreakdownWidget } from "../components/Widgets";

export default () => {
    return (
        <>
        <Col xs={5} sm={5} xl={5} className="mb-4">
            <CapitalBreakdownWidget></CapitalBreakdownWidget>
        </Col>
        </>
    );
};