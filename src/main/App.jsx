import React from 'react';
import Header from '../components/template/header/Header'
import Features from '../components/template/features/Features';
import Services from '../components/template/services/Services';
import Products from '../components/template/products/Products';
import Info from '../components/template/info/Info';
import Contact from '../components/template/contact/Contact';
import Footer from '../components/template/footer/Footer';

export default props =>
    <div>
        <Header />
        <Features />
        <Services />
        <Products />
        <Info />
        <Contact />
        <Footer />
    </div>