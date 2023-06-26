import React from 'react'
import '../../Static/css/nav.css'
import Toggle from './toggle_menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';


export default function Nav() {
    return (
        <header>
            <Container fluid>
                <Row>
                    <Col xs={10}>

                        <div className="header-left">
                            <Stack direction="horizontal" gap={3}>

                                <Image
                                    src={process.env.PUBLIC_URL + 'images/Technoscape black_ black 23_blue_20 logo.png'}
                                    alt="logo"
                                />

                                <p>
                                    Vellore Institute of Technology, India
                                    <br />
                                    December 14<sup>th</sup>-16<sup>th</sup>, 2023
                                </p>
                            </Stack>
                        </div>

                    </Col>

                    <Col>

                        <div className="header-right">
                            {/* <div>
                                <a className="btn" id='btn-right' >
                                    Paper Submition
                                </a>
                            </div> */}
                            <div>
                                <Toggle />
                            </div >
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
