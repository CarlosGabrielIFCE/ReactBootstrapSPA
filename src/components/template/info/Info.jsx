import React from 'react'
import './Info.css'

export default props => {
    return (
        <div class="py-5 bg-light service-27">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 align-self-center">
                        <h4 class="my-3">Entre em contato conosco e venha modernizar o seu negócio já!</h4>
                        <div class="row">
                            <div class="col-md-6 mt-4">
                                <span class="text-info-gradiant display-5">Q</span>
                                <h6 class="font-weight-medium my-3">Sua aplicação com um elevado nível de qualidade</h6>
                                <p>Desenvolvemos aplicações e Sites com profissionalismo e à gosto do Cliente.</p>
                                <a class="linking font-weight-medium" href="#f27">Entre em contato!</a>
                            </div>
                            <div class="col-md-6 mt-4">
                                <span class="text-info-gradiant display-5">E</span>
                                <h6 class="font-weight-medium my-3">Sua empresa com os melhores Softwares de Mercado</h6>
                                <p>Aplicações com soluções para melhorar a comunicação entre a empresa e diminuir os custos.</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center">
                        <img src="/imgs/cellphoneMockup.png" class="img-fluid" alt="wrapkit" />
                    </div>
                </div>
            </div>
        </div>
    )
}