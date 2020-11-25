import React from 'react'
import './Contact.css'

export default props => {
    return (
        <div class="contact2"
            id="contact">
            <div class="container">
                <div class="row contact-container">
                    <div class="col-lg-12">
                        <div class="card card-shadow border-0 mb-4">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="contact-box p-4">
                                        <h4 class="title">Entre em Contato</h4>
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group mt-3">
                                                        <input class="form-control" type="text" placeholder="Nome" />
                                                    </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group mt-3">
                                                            <input class="form-control" type="text" placeholder="Email para contato" />
                                                        </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group mt-3">
                                                                <input class="form-control" type="text" placeholder="Telefone Celular" />
                                                            </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="form-group mt-3">
                                                                    <input class="form-control" type="text" placeholder="Cidade" />
                                                                </div>
                                                                </div>
                                                                <div class="col-lg-12">
                                                                    <div class="form-group mt-3">
                                                                        <input class="form-control" type="text" placeholder="Mensagem" />
                                                                    </div>
                                                                    </div>
                                                                    <div class="col-lg-12">
                                                                        <button type="submit"
                                                                            class="btn rounded-pill morpheus-den-gradient mt-3 mb-3 text-white border-0 py-2 px-3"><span> ENVIAR <i
                                                                                class="ti-arrow-right"></i></span></button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 bg-image">
                                                        <div class="detail-box p-4">
                                                            <h5 class="text-white font-weight-light mb-3">ENDEREÇO</h5>
                                                            <p class="text-white op-7">Lorem Ipsum
                                                                <br /> Lore Ipsum</p>
                                                                <h5 class="text-white font-weight-light mb-3 mt-4">ENTRE EM CONTATO</h5>
                                                                <p class="text-white op-7">61 9999 9999
                                                                    <br /> </p>
                                                                    <div class="round-social light">
                                                                        <a class="text-decoration-none text-white border border-white rounded-circle"><i
                                                                            class="fab fa-facebook"></i></a>
                                                                        <a class="text-decoration-none text-white border border-white rounded-circle"><i
                                                                            class="fab fa-twitter"></i></a>
                                                                        <a class="text-decoration-none text-white border border-white rounded-circle"><i
                                                                            class="fab fa-instagram"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    )
}