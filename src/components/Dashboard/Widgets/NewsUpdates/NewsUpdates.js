import React from 'react';
import { Link } from 'react-router-dom';
import './newsupdates.scss';

const NewsUpdates = () =>{
    return(
        <div className="widget-container">
            <h2><em className="fa fa-newspaper" aria-hidden="true"></em> News & Updates</h2>
            <Link to="/NewsUpdates" className="widget-more">more...</Link>
            <ul className="news-list">
                <li>
                    <h4><Link to="#" className="news-list-link">Lorem Ipsum is simply dummy text</Link></h4>
                    <p><Link to="#" className="news-list-link">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...</Link></p>
                </li>
                <li>
                    <h4><Link to="#" className="news-list-link">Lorem Ipsum is simply dummy text</Link></h4>
                    <p><Link to="#" className="news-list-link">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...</Link></p>
                </li>
                <li>
                    <h4><Link to="#" className="news-list-link">Lorem Ipsum is simply dummy text</Link></h4>
                    <p><Link to="#" className="news-list-link">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...</Link></p>
                </li>
                <li>
                    <h4><Link to="#" className="news-list-link">Lorem Ipsum is simply dummy text</Link></h4>
                    <p><Link to="#" className="news-list-link">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...</Link></p>
                </li>
            </ul>
        </div>
    );
}

export default NewsUpdates;