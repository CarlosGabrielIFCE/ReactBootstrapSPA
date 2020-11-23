import React from 'react'
import { MDBContainer, MDBRow } from 'mdbreact'
import './Features.css' 

export default props =>
    <React.Fragment>
        <div className="py-5 service-1">
            <MDBContainer>
                <MDBRow>
                    <div class="col-md-4 wrap-service1-box">
                        <div class="card border-0 card-shadow mb-4">
                            <div class="card-body text-center">
                                <div class="my-3"><img src="/imgs/scalability.png" height="50" /></div>
                                <h6 class="font-weight-medium">Sistemas Escaláveis</h6>
                                <p class="mt-3">Capacidade de grande manipulação de dados nos Sistemas de forma uniforme.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 wrap-service1-box">
                        <div class="card border-0 card-shadow mb-4">
                            <div class="card-body text-center">
                                <div class="my-3"><img src="/imgs/stats.png" height="50" /></div>
                                <h6 class="font-weight-medium">Resultados Satisfatórios</h6>
                                <p class="mt-3">Programas desenvolvidos para fácil utilização e resolução dos problemas da empresa.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 wrap-service1-box">
                        <div class="card border-0 card-shadow mb-4">
                            <div class="card-body text-center">
                                <div class="my-3"><img src="/imgs/smartphone.png" height="50" /></div>
                                <h6 class="font-weight-medium">Tecnologias de Mercado</h6>
                                <p class="mt-3">Utilizamos as tecnologias mais modernas do mercado para fácil manutenção e atualização.</p>
                            </div>
                        </div>
                    </div>
                </MDBRow>
            </MDBContainer>
        </div>
    </React.Fragment>