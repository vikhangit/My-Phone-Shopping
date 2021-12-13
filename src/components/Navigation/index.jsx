import React, { useState } from 'react';

import './Navigation.scss';
import {
    Badge,
    Button,
    Col, Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav, Navbar,
    NavItem,
    NavLink, Row, UncontrolledDropdown
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';
import Images from '../../constants/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
Navigation.propTypes = {

};

function Navigation(props) {
    const cart = useSelector(state => state.productCarts);
    const [showNavLink, setShowNavLink] = useState(false);
    const totalCart = cart.length;
    return (
        <div className="shop-header">
            <Container className="mt-2">
                <Row className="justify-content-center">
                    <Col className="">

                    </Col>
                    <Col className="">
                        <a>
                            <img className="shop-header__img" src={Images.LOGO} alt="" />
                        </a>
                    </Col>
                    <Col className="">

                    </Col>
                </Row>
            </Container>
            <Container fluid className="shop-header__nav" onMouseLeave={() => setShowNavLink(false)}>
                <Row>
                    <Navbar light expand="md">
                        <div className="">
                            <Button
                                className="shop-header__button"
                                onClick={() => setShowNavLink(!showNavLink)}
                                color={showNavLink ? "danger" : "secondary"}
                            >
                                {showNavLink === false
                                    ? <FontAwesomeIcon icon="bars" color="light" />
                                    : <FontAwesomeIcon icon="times" />
                                }
                            </Button>
                            <Col xs="12" sm="12" lg="12" md="12">
                                <Nav id="id" className={!showNavLink ? "shop-header__menu" : ""} navbar>
                                    <NavItem>
                                        <NavLink
                                            className="shop-header__link"
                                            tag={RRNavLink}
                                            exact to="/"
                                            activeClassName="shop-header__link--active"
                                        >
                                            HOME
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="shop-header__link"
                                            tag={RRNavLink}
                                            exact to="/product"
                                            activeClassName="shop-header__link--active"
                                        >
                                            PRODUCT
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="shop-header__link"
                                            tag={RRNavLink}
                                            exact to="/accessories"
                                            activeClassName="shop-header__link--active"
                                        >
                                            ACCESSORIES
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="shop-header__link"
                                            tag={RRNavLink}
                                            exact to="/about-us"
                                            activeClassName="shop-header__link--active"
                                        >
                                            ABOUT US
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink
                                            className="shop-header__link"
                                            tag={RRNavLink}
                                            exact to="/product-cart"
                                            activeClassName="shop-header__link--active"
                                        >
                                            <FontAwesomeIcon icon="shopping-cart" />
                                            <sup style={{ color: 'white', backgroundColor: 'red', fontSize: '15px', borderRadius: '40%' }}>
                                                <Badge color='red'>{totalCart}</Badge>
                                            </sup>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </div>
                    </Navbar>
                </Row >
            </Container >
        </div >
    );
}

export default Navigation;