import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import 'views/speechdoc.css';
 
export default function Speechdoc() {
 
    const YoutubeEmbed = ({ embedId }) => (
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
 
    YoutubeEmbed.propTypes = {
        embedId: PropTypes.string.isRequired
    };
 
 
 
 
    return (
        <div>
            <h1>Courses recommended to improve the sturttering</h1>
            <p>Webpage links</p>
            <ul>
                <li><Link href='https://www.shortform.com/summary/communication-skills-training-summary-james-williams?utm_source=bing&utm_medium=cpc&utm_campaign=530909223&msclkid=15988c8e4fce1c1dbb1eeac8151f84dd'>Course1</Link></li>
                <li><Link href='https://www.bing.com/search?q=how+to+improve+the+communication+skills&qs=SC&pq=how+to+improve+the+commuction&sc=10-29&cvid=4FE8BBE188194B5A8C1E5E4313586A30&FORM=QBRE&sp=1&lq=0'>Course2</Link></li>
            </ul>
 
 
            <YoutubeEmbed embedId="Fjlsrgye0Cs" />
 
        </div>
    )
}