import { MDBBtn } from 'mdbreact'
import React from 'react'
import './Products.css'

export default props => {
    return (
        <div class="container-fluid team4">
            <section class="noMargin" id="products">
                <div class="row pt-2" >
                    <div class="col-lg-5 text-center text-lg-left" id="laptop">
                        <img src="/imgs/laptopSIS.png" alt="" class="img-fluid z-depth-0 " />
                    </div>
                    <div class="col-lg-7 with-margin-top" >
                        <h2 class="h2 py-1 font-weight-bold text-center">SIS Controladoras</h2>
                        <p class="px-5 mb-5 pb-3 lead text-center">O SIS Controladoras é um Software ERP de gestão completo para Empresas
                        Controladoras de Pragas. Ele provê desde a prospecção de clientes, até a geração de boletos e notas fiscais e envio de
        emails!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7 with-margin-top" >
                        <h2 class="h2 py-1 font-weight-bold text-center">SIS Mobile 1.0 e 2.0</h2>
                        <p class="px-5 mb-5 pb-3 lead text-center">O Aplicativo SIS Mobile registra todos os dados operacionais dos
                        técnicos das empresas Controladoras de Pragas, e tudo é feito de forma offline, salvo de forma local, e sincronizado
                        de volta para o Sistema Web ao retornar à empresa!
                        </p>
                        <div className="centralized">
                        <MDBBtn className="rounded-pill morpheus-den-gradient">Testar Grátis</MDBBtn>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center text-lg-left">
                        <img src="/imgs/cellphoneBenu.png" alt="" class="img-fluid z-depth-0" />
                    </div>
                </div>
            </section>
        </div>
    )
}