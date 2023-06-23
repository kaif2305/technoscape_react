import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import '../static/css/footer.css'

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="footer-content">
                    <Row>
                        <Col className="left-content" >
                            <img src="images/logo1.png" alt="" />
                            <div className="details">
                                <Stack gap={2}>
                                    <h1>Dr Mahesh Ganesapillai</h1>
                                    <h4>Conference Chair-TECHNOSCAPE<sup>23</sup></h4>
                                    <h4>Professor-School of Chemical Engineering,</h4>
                                    <h4>Vellore Institute of Technology,</h4>
                                    <h4>Vellore, Tamil Nadu, INDIA.</h4>
                                </Stack>
                            </div>
                        </Col>

                        <Col className="container2 " xs={2}>

                            <Stack gap={4}>
                                <div className="msg-phn">
                                    <Stack direction='horizontal'>
                                        <img src="images/message.png" alt="" />
                                        <h3>maheshgpillai@vit.ac.in</h3>
                                    </Stack>
                                </div>
                                <div className="msg-phn">
                                    <Stack direction='horizontal'>
                                        <img src="images/message.png" alt="" />
                                        <h3>technoscape.support@vit.ac.in</h3>
                                    </Stack>
                                </div>
                                <div className="msg-phn">
                                    <Stack direction='horizontal'>
                                        <img src="/images/phone.png" alt="" />
                                        <h3>+91 9444-135-437</h3>
                                    </Stack>
                                </div>
                                <div className="msg-phn">
                                    <Stack direction='horizontal'>
                                        <img src="images/globe.png" alt="" />
                                        <h3>technoscape.in</h3>
                                    </Stack>
                                </div>
                            </Stack>
                        </Col>


                        <Col className="calc-container" id="contact-us" xs={5}>
                            <h1>Contact Us</h1>
                            <h2>Post your queries regarding TECHNOSCAPE<sup>23</sup></h2>
                            <div className="calc-details">
                                <div className="detail-cont">
                                    <input type="text" placeholder="Full Name" />
                                    <input type="text" placeholder="Email" />
                                </div>
                                <input type="text" placeholder="Leave us a message..." />
                            </div>

                            <button>Submit</button>
                        </Col>
                    </Row>

                </div>
                <Container>
                    <div className="bottom-details">

                        <h1>TECHNOSCAPE<sup>23</sup></h1>
                        {/* <!-- <button>FAQ</button> --> */}

                    </div>
                </Container>
            </Container>
        </footer>
    )
}
