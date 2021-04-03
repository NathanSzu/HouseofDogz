import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
    return (
        <div>
            <Row>
                <Col>
                    <section>
                        <ImageSlider />
                    </section>
                </Col>
            </Row>
            <Row>
                <section>

                </section>
            </Row>

        </div>
    )
}
