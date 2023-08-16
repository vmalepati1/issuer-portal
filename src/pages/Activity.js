import React, { useState, useEffect } from "react";
import { Col, Row } from '@themesberg/react-bootstrap';
import { ActivityWidget, InsightsWidget } from '../components/Widgets';
const AWS = require('aws-sdk');
const fetch = require('node-fetch'); // You can use 'axios' or any other HTTP library of your choice

export default function Activity() {
    const [ classesInfo, setClassesInfo ] = useState([]);
    const [ activityList, setActivityList ] = useState([]);
    const [ insightsList, setInsightsList ] = useState([]);

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
                .then(activityAndStats => {
                    let activity = activityAndStats.activity;
                    let stats = activityAndStats.stats;

                    setActivityList(prevActivityList => [...prevActivityList, activity]);
                    setInsightsList(prevInsightsList => [...prevInsightsList, stats]);
                })
                .catch(error => {
                    console.error(error);
                    setActivityList(prevActivityList => [...prevActivityList, null]);
                    setInsightsList(prevInsightsList => [...prevInsightsList, null]);
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
                const insights = insightsList[index] || [];

                if (activity && insights) {
                    return (
                            <Row key={index}>
                                <Col>
                                    <ActivityWidget activity={activity}>
                                    </ActivityWidget>
                                </Col>
                    
                                <Col>
                                    <InsightsWidget insights={insights} assetCode={classInfo.code}>
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