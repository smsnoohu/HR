import React, { useContext } from 'react';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Navigation from './Shared/Navigation/Navigation';
import { EventContext } from '../context/EventContextProvider';
import ContainerNav from './ContainerNav';

const Container = () => {
    console.log('Main Container');

    const { clicked, loader } = useContext(EventContext);

    return (
        <div id="wrapper" className={ clicked['left-nav'] ? 'nav-close' : ''}>
            <Header />
            <div className="container-fluid" id="container">
                <Navigation />
                <section className="middle-container">
                    <ContainerNav />
                    <Footer />
                </section>
            </div>
            {loader && <div className="page-loader"></div>}
        </div>
    );
}

export default Container;