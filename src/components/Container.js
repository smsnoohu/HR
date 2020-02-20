import React, { useContext } from 'react';
import Header from './Shared/Header/Header';
import Navigation from './Shared/Navigation/Navigation';
import { EventContext } from '../context/EventContextProvider';

const Container = () => {
    console.log('Main Container');

    const { clicked } = useContext(EventContext);

    return (
        <div id="wrapper" className={ clicked['left-nav'] ? 'nav-close' : ''}>
            <Header />
            <div className="container-fluid" id="container">
                <Navigation />
                <section className="middle-container">
                    <h1>Dashboard</h1>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="widget-container">
                                <h2><em className="fa fa-video" aria-hidden="true"></em> Feature Videos</h2>
                                <video controls>
                                    <source src="https://youtu.be/U2hXctlP7_w" type="video/mp4" />
                                    <p>Your browser doesn't support HTML5 video. Here is a <a href="https://youtu.be/U2hXctlP7_w">link to the video</a> instead.</p>
                                </video>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="widget-container">
                                <h2><em className="fa fa-newspaper" aria-hidden="true"></em> News & Updates</h2>
                                <video controls>
                                    <source src="https://youtu.be/U2hXctlP7_w" type="video/mp4" />
                                    <p>Your browser doesn't support HTML5 video. Here is a <a href="https://youtu.be/U2hXctlP7_w">link to the video</a> instead.</p>
                                </video>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Container;