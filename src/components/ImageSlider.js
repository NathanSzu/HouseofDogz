import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../utils/assets/CoverSlider-01.png'
import Slider2 from '../utils/assets/CoverSlider-02.png'
import Slider3 from '../utils/assets/CoverSlider-03.png'
import Slider4 from '../utils/assets/CoverSlider-04.png'

export default function ImageSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider4}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
