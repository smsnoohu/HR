import React from 'react';

const FeatureVideo = () =>{
    return(
        <div className="widget-container">
            <h2><em className="fa fa-video" aria-hidden="true"></em> Feature Videos</h2>
            <video controls>
                <source src="https://youtu.be/U2hXctlP7_w" type="video/mp4" />
                <p>Your browser doesn't support HTML5 video. Here is a <a href="https://youtu.be/U2hXctlP7_w">link to the video</a> instead.</p>
            </video>
        </div>
    );
}

export default FeatureVideo;