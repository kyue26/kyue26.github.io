import './Text.css';
import React from 'react';

function Text(props) {
    return (
        <div className="flex-content">
            <div id="photo">
                <img src="./pfp.JPG" width="288" height="400" alt="photo" />
            </div>
            <div id="information">
                <div id="page-header">
                    <h1><strong>Hi, I'm Katherine Yue!</strong></h1>
                    <h3>I'm currently a sophomore studying Computer Science at the University of Pennsylvania.</h3>

                    <div id="hobbies">
                        <p>In my free time, I like to:</p>
                        <ul>
                            <li>take walks when the weather is nice and crisp</li>
                            <li>learn new things - recently, been building circuits and learning photoshop</li>
                            <li>do fun things with penn spark and my friends!</li>
                        </ul>
                    </div>

                    <div id="reach-me">
                        <a href="https://www.linkedin.com/in/katherine-yue/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Text;