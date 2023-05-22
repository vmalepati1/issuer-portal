import React, { useState, useEffect } from "react";

import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { CapitalBreakdownWidget, TopRegisteredHoldersWidget } from "../components/Widgets";
import { STREET_NAME_ACCOUNTS } from "../globals";
// import { DcentCLIConnector } from 'dcent-cli-connector';

export default function Dashboard() {
    const [ classesInfo, setClassesInfo ] = useState([]);
    const [ investorInfo, setInvestorInfo ] = useState([]);

    const assetCode = 'DEMO';

    useEffect(() => {
        fetch(`http://localhost:8080/asset-class-data/${assetCode}`)
            .then(results => results.json())
            .then(data => {
                // console.log(data);
                setClassesInfo(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const promises = classesInfo.map(assetClass => {
            return fetch(`http://localhost:8080/get-top-investors/${assetClass.code}`)
                .then(results => results.json())
                .then(investors => {
                    const filteredInvestors = investors.filter(
                        investor => !STREET_NAME_ACCOUNTS.includes(investor.account_id)
                    );

                    setInvestorInfo(prevInvestorInfo => [...prevInvestorInfo, filteredInvestors]);
                });
        });

        Promise.all(promises)
            .catch(error => {
                console.error(error);
            });
    }, [classesInfo]);

    return (
        <>
        { classesInfo.map((classInfo, index) => {
            const investorData = investorInfo[index] || [];

            return (
            <Row key={classInfo.code}>
                <Col className="mb-4" xs={12} md={6}>
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
            
                <Col className="mb-4" xs={12} md={6}>
                    <TopRegisteredHoldersWidget class={classInfo.class} 
                                                investors={investorData}
                                                sharesOutstanding={classInfo.stats.outstandingShares}>
                    </TopRegisteredHoldersWidget>
                </Col>
            </Row>
            );
        })}
        </>
    );
};