import React, { useState, useEffect } from "react";

import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { CapitalBreakdownWidget, TopRegisteredHoldersWidget } from "../components/Widgets";
// import { DcentCLIConnector } from 'dcent-cli-connector';

export default function Dashboard() {
    const [ classesInfo, setClassesInfo ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/asset-classes/DEMO')
            .then(results => results.json())
            .then(data => {
                // console.log(data);
                setClassesInfo(data);
            });
    }, []);

    return (
        <>
        { classesInfo.map((classInfo) => {
            return (
            <Row>
                <Col className="mb-4">
                    <CapitalBreakdownWidget companyName={classInfo.companyName} 
                                            class={classInfo.class} 
                                            par={classInfo.par}>
                    </CapitalBreakdownWidget>
                </Col>
            
                <Col className="mb-4">
                    <TopRegisteredHoldersWidget></TopRegisteredHoldersWidget>
                </Col>
            </Row>
            );
        })}
        </>
    );
};