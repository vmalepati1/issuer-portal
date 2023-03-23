import React from "react";

import { Col, Row } from '@themesberg/react-bootstrap';
import { HolderListWidget, RegisteredTrendsWidget } from '../components/Widgets';

export default function Investors() {
    return (
        <>
            <Row className="mb-3">
                <Col>
                    <HolderListWidget>
                    </HolderListWidget>
                </Col>

                <Col>
                    <RegisteredTrendsWidget>
                    </RegisteredTrendsWidget>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <HolderListWidget>
                    </HolderListWidget>
                </Col>

                <Col>
                    <RegisteredTrendsWidget>
                    </RegisteredTrendsWidget>
                </Col>
            </Row>
        </>
    );
};