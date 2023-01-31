import React from 'react';
import logo from '../../assets/images/eco-logo.png'
import { Col, Container, Row, ListGroup, ListGroupItem } from 'reactstrap';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' md='6' className='mb-4'>
                        <div className='logo'>
                            <div>
                                <h1 className='text-white'>Multimart</h1>
                            </div>
                        </div>
                        <p className='footer__text mt-3'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum natus nihil atque pariatur ut, exercitationem aut amet tempora cumque suscipit!
                        </p>
                    </Col>

                    <Col lg='3' md='3' className='mb-4'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link className='link' to="/">Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link className='link' to="/">Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link className='link' to="/">Arm Chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link className='link' to="/">Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2' md='3' className='mb-4'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Useful Links</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link className='link' to="/shop">Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link className='link' to="/cart">Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link className='link' to="/login">Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <Link className='link' to="#">Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3' md='4' >
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact</h4>
                            <ListGroup className='footer__contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className='ri-map-pin-line'></i></span>
                                    <p className='m-0 py-0'>123 ZindaBazar, Sylhet, Bangladesh</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 '>
                                    <span><i className='ri-phone-line'></i></span>
                                    <p className='m-0'>+0881234567890</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className='ri-mail-line'></i></span>
                                    <p className='m-0'>example123@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <p className='footer__copyright'>
                            Copyright {year} developed by Muhibur Rahman. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;