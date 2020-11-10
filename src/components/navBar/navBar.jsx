import React, {useRef} from "react";
import "./navBar.css";

const navBar = (prop) => {
    let navBar = useRef();

    return (
        <header className={`navBar-container ${prop.display ? null: `slide-up`}`} ref={navBar}>
            <div className={`container ${prop.display ? null : `display-not`}`}>
                <nav className="nav">
                    <a href="" className="brand">COLD</a>
                    <div className="nav-links" id="nav-pack">
                        <div className="nav-ham" id="nav-remove">
                            <span>&#10005;</span>
                        </div>
                        <a href="#aboutPage" className="link-about nav-link">About</a>
                        <a href="#projectPage" className="link-project nav-link">Project</a>
                        <a href="#contactPage" className="link-contact nav-link">Contact</a>
                        <a href="" className="link-github nav-link"><i className="fa fa-github" aria-hidden="true"></i></a>
                        <a href="" className="link-linkedIn nav-link"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a href="" className="link-twitter nav-link"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                    <div className="nav-ham" id="nav-ham">
                        <hr id="hr"/>
                        <hr id="hr"/>
                        <hr id="hr"/>
                    </div>
                    
                </nav>
            </div>
        </header>
    );
}

export default navBar;