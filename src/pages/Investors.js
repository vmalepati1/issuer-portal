import React, { useState, useEffect } from "react";

import { Col, Row } from '@themesberg/react-bootstrap';
import { HolderListWidget, RegisteredTrendsWidget } from '../components/Widgets';

export default function Investors() {
    const [ classes, setClasses ] = useState([]);
    const [ investorInfo, setInvestorInfo ] = useState([]);

    const assetCode = 'DEMO';

    useEffect(() => {
        fetch(`http://localhost:8080/asset-classes/${assetCode}`)
            .then(results => results.json())
            .then(data => {
                // console.log(data);
                setClasses(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const promises = classes.map(assetClass => {
            return fetch(`http://localhost:8080/get-top-investors/${assetClass.code}`)
                .then(results => {
                    if (!results.ok) {
                        throw new Error(results.status);
                    }
                    return results.json();
                })
                .then(investors => {
                    setInvestorInfo(prevInvestorInfo => [...prevInvestorInfo, investors]);
                })
                .catch(error => {
                    console.error(error);
                });
        });
        
        Promise.all(promises)
            .catch(error => {
                console.error(error);
            });
    }, [classes]);

    return (
        <>
            { investorInfo.map((investorData, index) => {
                return (
                    <div key={index}>
                        <Row className="mb-3">
                            <Col>
                                <HolderListWidget class="A">
                                </HolderListWidget>
                            </Col>

                            <Col>
                                <RegisteredTrendsWidget>
                                </RegisteredTrendsWidget>
                            </Col>
                        </Row>
                    </div>
            );
        })}
        </>
    );
};