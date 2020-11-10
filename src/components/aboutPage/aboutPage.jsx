import React, { useRef} from 'react';
import "./aboutPage.css";

const aboutPage = ({display}) => {
    let page = useRef();

    return (
        <section className={`aboutPage-container page`} ref={page} >
            <div className="aboutPage-background-left"></div>
            <div className="aboutPage-background-right"></div>

            <div className={`container ${display ? null : null}`}>
                <div className="aboutPage-content">
                    <div className="aboutPage-content-about-me">
                        <div className="line"></div>
                        <div className={`about-me-title ${display ? null : `dim`}`}>
                            <h1 className="about-me">About</h1>
                            <h1 className="about-me">Us</h1>
                        </div>
                        <p className={`first-par ${display ? null : `dim`}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis aliquid inventore veniam sed accusamus perspiciatis tempore error ipsam obcaecati ipsa, commodi eaque corporis nostrum, assumenda recusandae distinctio eos iste.</p>
                        <div className={`skills ${display ? null : `dim`}`}>
                            <ul className="first-skill-list">
                                <li>HTML5 & CSS3</li>
                                <li>JavaSript</li>
                                <li>Node Js</li>
                            </ul>
                            <ul className="second-skill-list">
                                <li>WordPress</li>
                                <li>React</li>
                                <li>Vue Js</li>
                            </ul>
                        </div>
                        <button className={`resume ${display ? null : `dim`}`}>Resume/CV</button>
                    </div>
                    <div className="aboutPage-content-image">
                        <img src="" alt="" className="my-photo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default aboutPage;