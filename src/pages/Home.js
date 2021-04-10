import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <div className='background'>

            <Helmet>
                <title>Home | House of Dogz</title>
            </Helmet>

            <Row>
                <Col>
                    <section>
                        <ImageSlider />
                    </section>
                </Col>
            </Row>
            <Row>
                <Col className='p-4'>

                    <section>
                        <h1 className='text-center'>Your Premier Dog Sitting Professionals</h1>
                        <p className='p-4'>Don't stress about your dog on a busy day. Drop them off with us and we can help them play! If you've had trouble finding quality dog daycare professionals look no further than the House of Dogz. With more than 3,300 square feet of play space and a full staff of caring and attentive attendants we have what it takes to keep your pet happy and safe.</p>
                    </section>
                </Col>
            </Row>

        </div>
    )
}
