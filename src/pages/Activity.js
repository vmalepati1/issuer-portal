import React from "react";

import { Col, Row } from '@themesberg/react-bootstrap';
import { ActivityWidget, InsightsWidget } from '../components/Widgets';

export default function Activity() {
    return (
        <Row>
            <Col>
                <ActivityWidget>
                </ActivityWidget>
            </Col>

            <Col>
                <InsightsWidget>
                </InsightsWidget>
            </Col>
        </Row>
    );
};