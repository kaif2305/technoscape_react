import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

import '../../static/css/colab_clg.css'

export default function Colab_clg() {

    const navbarRef = useRef(null);

    useEffect(() => {
        function myFunction() {
            const navbar = navbarRef.current;
            const sticky = navbar.offsetTop;



            if (window.scrollY >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

        window.addEventListener('scroll', myFunction);


        return () => {
            window.removeEventListener('scroll', myFunction);
        };
    }, []);


    return (
        <div id='navbar-header' ref={navbarRef} className="clg-icon-container">
            <Container fluid>
                <Row>
                    <Col>
                        <img src="images/sdg6 logo.png" alt="" />
                    </Col>
                    <Col>
                        <img src="images/vit logo.png" alt="" />
                    </Col>
                    <Col>
                        <img src="images/ynu logo.png" alt="" />
                    </Col>
                    <Col>
                        <img src="images/gdansk logo.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
