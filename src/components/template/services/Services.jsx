import React from 'react'
import './Services.css'
import { MDBBtn } from 'mdbreact';

export default props =>
    <React.Fragment>
        <div className="container-fluid bg-light team4" id="services">
            <div className="row pt-2">
                <div className="col-lg-5 text-center text-lg-left">
                    <img src="/imgs/laptopSuch.png" alt="" class="img-fluid z-depth-0" />
                </div>
                <div className="col-lg-7 margin-top-30">
                    <h2 className="h2 py-1 font-weight-bold text-center">Sistemas Web</h2>
                    <p className="px-5 mb-5 pb-3 lead grey-text text-center">A DevOps desenvolve tudo o que você precisa para
                    gerenciar com sucesso a gestão do seu negócio. Oferecemos funcionalidades que nenhuma
                    outra plataforma do mercado oferece, além de inovações constantes que fazem toda a diferença
          para a gestão bem sucedida da sua empresa.</p>
                    <ul>
                        <li>
                            Gere e envie automaticamente Relatórios para todos os seus clientes;
                        </li>
                        <li>Emita boletos bancários e Notas Fiscais Eletrônicas com praticidade e segurança total;</li>
                        <li>
                            Identifique as estratégias de vendas e marketing que geram mais lucro e resultado para a sua empresa;
                        </li>
                        <li>
                            Tenha uma visão completa da sua gestão e tome decisões com segurança com mais de 40 tipos de relatórios.
                        </li>
                    </ul>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-7">
                    <h2 className="h2 py-1 font-weight-bold text-center">Apps Mobile</h2>
                    <p className="px-5 mb-5 pb-3 lead grey-text text-center">Tenha controle total da sua empresa na palma da mão! Os
                    aplicativos
                    desenvolvidos pela DevOps possibilitam:
                    </p>
                    <ul>
                        <li>
                            Localização de funcionários e carros via GPS;
                        </li>
                        <li>Geração de orçamento pelo celular;</li>
                        <li>
                            Gestão de abastecimento de veículos diretamente do Aplicativo;
                        </li>
                        <li>
                            O Aplicativo funciona sem a necessidade do uso de Internet, tudo é salvo localmente
                            e sincronizado de volta quando voltar para a Empresa;
                        </li>
                    </ul>
                    <div className="button-on-center">
                        <MDBBtn className="rounded-pill morpheus-den-gradient">Veja um Exemplo</MDBBtn>
                    </div>

                </div>

                <div className="col-lg-5 text-center text-lg-left">
                    <img src="imgs/cellphoneSuch.png" alt="" class="img-fluid z-depth-0" />
                </div>


            </div>
        </div>
    </React.Fragment>