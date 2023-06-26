import React from 'react'
import Colab_clg from '../Header/colab_clg'
import TablePaperSub from './table'
import SubmissionForm from './submission_form'
import Key_dates from './key_dates'

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../../Static/css/paper_submission.css'

export default function Paper_Submission() {
    return (
        <div className="paper-sub-page-layout">
            <Container>
                <div className="page-title">
                    <h1>Paper Submissoin</h1>
                    <h3>Submit your research here.</h3>
                </div>
            </Container>

            <Colab_clg />

            <div className="align-table">
                <h1>REGISTRATION FEE</h1>
                <Container>
                    <ul>
                        <li>Registration fee is inclusive of 18% GST</li>
                        <li>Check World Bank high/low income country classification here:
                            <a href="#"> https://99designs.com/profiles/semasstudio/designs/1510123</a></li>
                    </ul>
                </Container>
                <TablePaperSub />
            </div>


            <div className="align-submission">
                <h1>SUBMISSION</h1>
                <Container>
                    <ul>
                        <li>Paper Template link:
                            <a href="#"> Paper Template</a></li>
                        <li>Paper should be submitted only in the prescribed template format</li>
                        <li>Only PDF files are accepted</li>
                        <li>Maximum file size is <span style={{ color: '#FA3D3D' }}> 2 MB </span></li>
                    </ul>
                </Container>

                <Container fluid>
                    <div className="submission-flex">
                        <div className="sub-left-container">
                            <Key_dates />
                        </div>
                        <div className="sub-right-container">
                            <SubmissionForm />
                        </div>

                    </div>
                </Container>
            </div >




        </div >



    )
}
