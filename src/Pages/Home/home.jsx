import React from 'react'
import '../../static/css/home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Clock from './clock'

export default function Home() {
    return (
        <div>
            <div className="slider">
                <img src="images/home1.png" alt="Home image" />


                <div class="middle-container_slider">
                    <h2>
                        <span>I</span>NTERNATIONAL <span>C</span>ONFERENCE ON
                    </h2>
                    <h1>
                        <span>S</span>USTAINABLE <span>T</span>ECHNOLOGIES FOR
                        <span>W</span>ATER AND <span>W</span>ASTEWATER
                        <span>T</span>REATMENT
                    </h1>
                    <h3>TRANSCEND - EVOLVE - SUSTAIN</h3>

                    <a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        Download
                    </a>

                </div>


                <div className="bottom-container">
                    <img id="collab" src="images/collab.png" alt="" />

                </div>

            </div>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title m-3" id="offcanvasExampleLabel">Download Links</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body m-3 ">
                    <div className="h5 ">
                        Brochure
                    </div>
                    <a className="btn btn-outline-dark" href="brochure.pdf" target="_blank" role="button">Download</a>

                    <div className="h5 mt-4">
                        Abstract Format
                    </div>
                    <a className="btn btn-outline-dark" href="Abstract Template.docx" target="_blank" role="button">Download</a>
                </div>
            </div>

            <Clock />

        </div>

    )
}
