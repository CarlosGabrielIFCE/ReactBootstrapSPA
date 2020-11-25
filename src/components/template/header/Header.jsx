import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBView, MDBMask, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Header.css'

class FullPageIntroWithNonFixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <header>
                        <MDBNavbar color="black" dark expand="md">
                            <MDBNavbarBrand>
                                <strong className="white-text">DevOps Techno</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.toggleCollapse} />
                            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Início</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#services">Recursos</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Produtos</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Contato</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink className="waves-effect waves-light" to="#!">
                                            <MDBIcon fab icon="facebook-f" />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink className="waves-effect waves-light" to="#!">
                                            <MDBIcon fab icon="twitter" />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink className="waves-effect waves-light" to="#!">
                                            <MDBIcon fab icon="instagram" />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </header>
                </Router>
                <MDBView src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
                    <MDBMask overlay="black-strong" className="flex-column">
                        <MDBRow>
                            <MDBCol md="1"></MDBCol>
                            <MDBCol md="5" className="flex-center flex-column text-white text-center text-title">
                                <h1>Modernize sua empresa com os softwares mais
                            inovadores do mercado</h1>
                                <br />
                                <h6 className="mb-3">Com a DevOps, você tem a possibilidade de ter tudo o que precisa para
                                modernizar a gestão do
                            seu negócio, diminuir seus custos e aumentar seus lucros. </h6>
                            </MDBCol>
                            <MDBCol md="4" className="justified-and-centered-content">
                                <MDBCard>
                                    <MDBCardBody>
                                        <form>
                                            <p className="h4 text-center py-4">Envie-nos um e-mail</p>
                                            <div className="grey-text">
                                                <MDBInput
                                                    label="Your name"
                                                    icon="user"
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                                <MDBInput
                                                    label="Your email"
                                                    icon="envelope"
                                                    group
                                                    type="email"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                                <MDBInput
                                                    label="Confirm your email"
                                                    icon="exclamation-triangle"
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                                <MDBInput
                                                    label="Your password"
                                                    icon="lock"
                                                    group
                                                    type="password"
                                                    validate
                                                />
                                            </div>
                                            <div className="text-center py-4 mt-3">
                                                <MDBBtn color="dark" type="submit">
                                                    Enviar
                  </MDBBtn>
                                            </div>
                                        </form>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="2" className="text-center text-white"></MDBCol>
                        </MDBRow>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default FullPageIntroWithNonFixedNavbar;