import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';


import '../../Static/css/key_dates.css'

export default function Key_dates() {
    return (
        <div className='key-dates-align'>
            <div className="desktop-key-dates">
                <h6>Key Dates</h6>
                <Row style={{ marginBottom: '4%' }}>
                    <Col>
                        <h4>Call for Papers Opens</h4>
                    </Col>
                    <Col>
                        <div className="left-sub-container">
                            <h5>15th MAR, 2023</h5>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '4%' }}>
                    <Col>
                        <h4>Abstract Submission
                            closes</h4>
                    </Col>
                    <Col>
                        <div className="left-sub-container">
                            <h5>30th JUN, 2023</h5>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '4%' }}>
                    <Col>
                        <h4>Intimation of Selected
                            Delegates</h4>
                    </Col>
                    <Col>
                        <div className="left-sub-container">
                            <h5>15th JUL, 2023</h5>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '4%' }}>
                    <Col>
                        <h4>Early Bird Registration
                            Closes</h4>
                    </Col>
                    <Col>
                        <div className="left-sub-container">
                            <h5>15th JUL, 2023</h5>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '4%' }}>
                    <Col>
                        <h4>Full Paper Submission
                            Closes</h4>
                    </Col>
                    <Col>
                        <div className="left-sub-container">
                            <h5>30th SEP, 2023</h5>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '4%' }}>
                    <Col>
                        <h4>Registration Closes</h4>
                    </Col>
                    <Col>
                        <div className="left-sub-container">
                            <h5>31th OCT, 2023</h5>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '4%' }}>
                    <Col>
                        <h4>Call for Papers Opens</h4>
                    </Col>
                    <Col>
                        <div className="left-sub-container">
                            <h5>30th NOV, 2023</h5>
                        </div>
                    </Col>
                </Row>
            </div>
            <Container fluid>
                <div className="mobile-view-title">

                    <h6>Key Dates</h6>
                </div>
                <div className="mobile-key-dates">
                    <div className="mobile-inner-box">
                        <Stack gap={4}>
                            <h4>Call for Papers Opens</h4>

                            <div className="left-sub-container">
                                <h5>15th MAR, 2023</h5>
                            </div>
                        </Stack>
                    </div>

                    <div className="mobile-inner-box">
                        <Stack>

                            <h4>Abstract Submission
                                closes</h4>

                            <div className="left-sub-container">
                                <h5>30th JUN, 2023</h5>
                            </div>

                        </Stack>
                    </div>

                    <div className="mobile-inner-box">
                        <Stack>
                            <h4>Intimation of Selected
                                Delegates</h4>

                            <div className="left-sub-container">
                                <h5>15th JUL, 2023</h5>
                            </div>

                        </Stack>
                    </div>

                    <div className="mobile-inner-box">
                        <Stack>

                            <h4>Early Bird Registration
                                Closes</h4>

                            <div className="left-sub-container">
                                <h5>15th JUL, 2023</h5>
                            </div>

                        </Stack>
                    </div >

                    <div className="mobile-inner-box">
                        <Stack>

                            <h4>Full Paper Submission
                                Closes</h4>

                            <div className="left-sub-container">
                                <h5>30th SEP, 2023</h5>
                            </div>

                        </Stack>
                    </div >

                    <div className="mobile-inner-box">
                        <Stack gap={4}>

                            <h4>Registration Closes</h4>

                            <div className="left-sub-container">
                                <h5>31th OCT, 2023</h5>
                            </div>

                        </Stack>
                    </div >

                    <div className="mobile-inner-box">
                        <Stack gap={4}>

                            <h4>Call for Papers Opens</h4>

                            <div className="left-sub-container">
                                <h5>30th NOV, 2023</h5>
                            </div>

                        </Stack>
                    </div >

                </div >
            </Container>

        </div >
    )
}
