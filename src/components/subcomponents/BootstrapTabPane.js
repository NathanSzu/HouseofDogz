import React, { useEffect } from 'react';
import { Tab, Row, Col } from 'react-bootstrap';

export default function BootstrapTabPane({ eventKey }) {
    const pricing = {
        oneStay: {
            short: { price: '$19.99', save: 'money with a package', length: '(up to 4 hours)' },
            work: { price: '$29.99', save: 'money with a package', length: '(4.01-8 hours)' },
            full: { price: '$34.99', save: 'money with a package', length: '(8.01-12 hours)' }
        },
        fiveStays: {
            short: { price: '$94.99', save: '$4.96' },
            work: { price: '$144.99', save: '$4.96' },
            full: { price: '$164.99', save: '$9.96' }
        },
        tenStays: {
            short: { price: '$184.99', save: '$14.91' },
            work: { price: '$279.99', save: '$19.91' },
            full: { price: '$324.99', save: '$24.91' }
        },
        twentyStays: {
            short: { price: '$359.99', save: '$39.81' },
            work: { price: '$539.99', save: '$59.81' },
            full: { price: '$629.99', save: '$69.81' }
        }
    }

    useEffect(() => {
        console.log(pricing.[eventKey].short.price)

    }, [])


    return (
        <Tab.Pane eventKey={eventKey}>
            <Row>
                <Col md={4} className='text-center'>
                    <h2 className='tab-header'>Short Stay</h2>
                    <p>{pricing.oneStay.short.length}</p>
                    <p className='font-weight-bold tab-price'>{pricing.[eventKey].short.price}</p>
                    <p>Save {pricing.[eventKey].short.save}!</p>
                </Col>
                <Col md={4} className='text-center'>
                    <h2 className='tab-header text-center'>Work Day</h2>
                    <p>{pricing.oneStay.work.length}</p>
                    <p className='font-weight-bold tab-price'>{pricing.[eventKey].work.price}</p>
                    <p>Save {pricing.[eventKey].work.save}!</p>
                </Col>
                <Col md={4} className='text-center'>
                    <h2 className='tab-header text-center'>Full Day</h2>
                    <p>{pricing.oneStay.full.length}</p>
                    <p className='font-weight-bold tab-price'>{pricing.[eventKey].full.price}</p>
                    <p>Save {pricing.[eventKey].full.save}!</p>
                </Col>
            </Row>
        </Tab.Pane>
    )
}
