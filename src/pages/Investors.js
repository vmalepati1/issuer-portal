import React from "react";

import { Col, Row } from '@themesberg/react-bootstrap';
import { HolderListWidget, RegisteredTrendsWidget } from '../components/Widgets';

export default function Investors() {
    return (
        <Row>
            <Col>
                <HolderListWidget>
                </HolderListWidget>
            </Col>

            <Col>
                <RegisteredTrendsWidget>
                </RegisteredTrendsWidget>
            </Col>
        </Row>
    );
};