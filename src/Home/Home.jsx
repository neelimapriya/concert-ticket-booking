import React from 'react';
import Header from './Header';
import Service from './Service';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;