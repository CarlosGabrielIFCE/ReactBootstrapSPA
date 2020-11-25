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
                        <h2 class="h2 py-1 font-weight-bold text-center">Lorem Ipsum</h2>
                        <p class="px-5 mb-5 pb-3 lead text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, lorem lobortis congue volutpat, odio massa laoreet magna, et bibendum odio arcu quis tellus. Donec eget rutrum velit. Donec at suscipit lorem.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7 with-margin-top" >
                        <h2 class="h2 py-1 font-weight-bold text-center">Lorem Ipsum</h2>
                        <p class="px-5 mb-5 pb-3 lead text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, lorem lobortis congue volutpat, odio massa laoreet magna, et bibendum odio arcu quis tellus. Donec eget rutrum velit. Donec at suscipit lorem.
                        </p>
                        <div className="centralized">
                            <MDBBtn className="rounded-pill morpheus-den-gradient">Testar Grátis</MDBBtn>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center text-lg-left">
                        <img src="/imgs/cellphoneSuch.png" alt="" class="img-fluid z-depth-0" />
                    </div>
                </div>
            </section>
        </div>
    )
}