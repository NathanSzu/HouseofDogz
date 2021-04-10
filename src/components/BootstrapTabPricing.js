import React from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import BootstrapTabPane from './subcomponents/BootstrapTabPane'

export default function BootstrapTabPricing() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="oneStay">
            <Row className='pr-4 pl-4 pb-4'>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link className='font-weight-bold' eventKey="oneStay">Single</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='font-weight-bold' eventKey="fiveStays">Five Pack</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='font-weight-bold' eventKey="tenStays">Ten Pack</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='font-weight-bold' eventKey="twentyStays">Twenty Pack</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        {/* Custom components for ease of readability */}
                        <BootstrapTabPane eventKey='oneStay' />
                        <BootstrapTabPane eventKey='fiveStays' />
                        <BootstrapTabPane eventKey='tenStays' />
                        <BootstrapTabPane eventKey='twentyStays' />
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
