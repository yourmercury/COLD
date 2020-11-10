import React, {  useState } from 'react';
import "./homePage.css";

const homePage = () => {
    
    return (
        <section className="homePage-container page">
            <div className="homePage-introduction">
                <div className="conta">
                    <div className="homePage-intro">
                        <p className="homePage-greet">Hi, We are a Web Developement and Web Deisgn Duo. We are</p>
                        <h1 className="homePage-name">COLD</h1>
                        <button className="homePage-btn">Hire Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default homePage;