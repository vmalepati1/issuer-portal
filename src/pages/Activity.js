import React, { useState, useEffect } from "react";
import { Col, Row } from '@themesberg/react-bootstrap';
import { ActivityWidget, InsightsWidget } from '../components/Widgets';

export default function Activity() {
    const [ classesInfo, setClassesInfo ] = useState([]);
    const [ activityList, setActivityList ] = useState([]);

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
            return fetch(`http://localhost:8080/get-activity/${assetClass.code}`)
                .then(results => {
                    if (!results.ok) {
                        throw new Error(results.status);
                    }
                    return results.json();
                })
                .then(activityList => {
                    setActivityList(prevActivityList => [...prevActivityList, activityList]);
                })
                .catch(error => {
                    console.error(error);
                    setActivityList(prevActivityList => [...prevActivityList, null]);
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
                const activity = activityList[index] || [];

                if (activity) {
                    return (
                            <Row>
                                <Col>
                                    <ActivityWidget activity={activity}>
                                    </ActivityWidget>
                                </Col>
                    
                                <Col>
                                    <InsightsWidget>
                                    </InsightsWidget>
                                </Col>
                            </Row>
                        );
                } else {
                    return (
                        <>
                        </>
                    );
                }
            })}
        </>
    );
};