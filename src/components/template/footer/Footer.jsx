import React from 'react'
import './Footer.css'

export default props => {
    return (

        <footer class="page-footer font-small bg-light pt-4 team4">
            <div class="container text-center text-md-left">
                <div class="row text-center text-md-left mt-3 pb-3">
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold"><img src="/imgs/DevOpsLateral.png"
                            height="70" /></h6>
                        <p>Com anos de experiência no mercado de tecnologia, a DevOps é especializada no desenvolvimento de
                        softwares que simplificam e otimizam a gestão de empresas.
                </p>
                    </div>
                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Produtos</h6>
                    </div>
                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Contato</h6>
                        <p>
                            Lorem Ipsum
                </p>
                        <p>
                            comercial@devops.com.br
                </p>
                        <p>
                            61 99999 9999
                </p>
                    </div>
                </div>
                <hr />
                <div class="row d-flex align-items-center">
                    <div class="col-md-7 col-lg-8">
                        <p class="text-center text-md-left">© 2020 Copyright:
                  <a href="https://mdbootstrap.com/">
                                <strong> MDBootstrap.com</strong>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>


    )
} 