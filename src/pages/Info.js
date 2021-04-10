import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import BootstrapTabPricing from '../components/BootstrapTabPricing'

export default function Info() {
    return (
        <div className='background'>

            <Helmet>
                <title>Info | House of Dogz</title>
            </Helmet>

            <Row>
                <Col>
                    <section>
                        <Image src="https://via.placeholder.com/800x300" className='image-cover' fluid />
                    </section>
                </Col>
            </Row>

            <Row>
                <Col className='p-4'>
                    <section className='p-3'>
                        <h1 className='text-center'>A Great Way to Play!</h1>
                        <p className='p-4'>At the House of Dogz we provide a safe environment for your furry family members to play and socialize under consistent supervision. Our indoor play space gives the dogs ample room to work out their energy in a low risk social environment. Then, when it’s time for some fresh air, we get them outside and into our spacious outdoor play area. This outdoor pen is entirely fenced in with natural terrain and even has a couple trees that offer shade in the summertime. Finally, we offer a number of flexible pricing options. So whether you’re looking to drop your dog off for an hour, half a day, or from open to close, we have the perfect package to fit your needs.</p>

                        <p className='disclaimer font-weight-bold text-center w-75 mr-auto ml-auto'>All dogs are required to be up to date on rabies, bordatella, and distemper vaccinations. Any dogs older than 1 year MUST be spayed/neutered.</p>
                    </section>
                </Col>
            </Row>

            <Row>
                <Col>
                    <section className='border-top'>
                        <h1 className='text-center p-4'>Packages & Pricing</h1>
                        <BootstrapTabPricing />
                    </section>
                </Col>
            </Row>

        </div>
    )
}
