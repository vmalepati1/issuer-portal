import React, { useState, useEffect } from "react";

import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { CapitalBreakdownWidget, TopRegisteredHoldersWidget } from "../components/Widgets";
// import { DcentCLIConnector } from 'dcent-cli-connector';

export default function Dashboard() {
    const [ classesInfo, setClassesInfo ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/asset-class-data/DEMO')
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
                                            par={classInfo.par}
                                            sharesOutstanding={classInfo.stats.outstandingShares}
                                            sharesAtDTC={classInfo.stats.sharesInDTC}
                                            treasuryShares={classInfo.stats.treasuryShares}
                                            restrictedShares={classInfo.stats.restrictedShares}
                                            reservedShares={classInfo.stats.reservedShares}
                                            authorizedShares={classInfo.stats.authorizedShares}
                                            dsppShares={classInfo.stats.dsppShares}
                                            pendingIPOShares={classInfo.stats.pendingIPOShares}
                                            regAShares={classInfo.stats.regAShares}
                                            regCFShares={classInfo.stats.regCFShares}
                                            privatePlacementShares={classInfo.stats.privatePlacementShares}
                                            shelfShares={classInfo.stats.shelfShares}
                                            >
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