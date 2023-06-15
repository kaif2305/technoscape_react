import React from 'react'
import '../../static/css/clock.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
export default function Clock() {
    return (
        <div className="clock-bg">

            <img id="bg" src="images/clock-bg.png" className="image1" />
            <Container>
                <div className="d-flex justify-content-center">
                    <img id="dates" src="images/Group 67.png" className="image2" />
                    <img id="dates2" src="images/Group 70.png" className="image2" />
                </div>
            </Container>
            <div id="countdown">
                <ul className="container-clock">
                    <li><span id="days"></span>Days</li>
                    <li><span id="hours"></span>Hours</li>
                    <li><span id="minutes"></span>Minutes</li>
                    <li><span id="seconds"></span>Seconds</li>
                </ul>
            </div>

        </div>
    )
}
