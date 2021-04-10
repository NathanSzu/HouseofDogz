import React from 'react'
import { Row, Col, Jumbotron } from 'react-bootstrap'

export default function Info() {
    return (
        <div className='background'>
            <Row>
                <Col>
                    <section>
                        
                    </section>
                </Col>
            </Row>
            <Row>
                <Col className='p-4'>
                    <section className='p-4'>
                        <h1 className='text-center'>A Great Way to Play!</h1>
                        <p className='p-5'>At the House of Dogz we provide a safe environment for your furry family members to play and socialize under consistent supervision. Our indoor play space gives the dogs ample room to work out their energy in a low risk social environment. Then, when it’s time for some fresh air, we get them outside and into our spacious outdoor play area. This outdoor pen is entirely fenced in with natural terrain and even has a couple trees that offer shade in the summertime. Finally, we offer a number of flexible pricing options. So whether you’re looking to drop your dog off for an hour, half a day, or from open to close, we have the perfect package to fit your needs.</p>

                        <p className='disclaimer font-weight-bold text-center w-75 mr-auto ml-auto'>All dogs are required to be up to date on rabies, bordatella, and distemper vaccinations. Any dogs older than 1 year MUST be spayed/neutered.</p>
                    </section>
                </Col>
            </Row>

        </div>
    )
}
