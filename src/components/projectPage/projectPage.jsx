import React, { useState, useRef } from 'react';
import "./projectPage.css";

const projectPage = ({display}) => {
    let firstSlide = useRef(null);
    let secondSlide = useRef(null);
    let thirdSlide = useRef(null);
    let [grid, isGrid] = useState(false);
    let page = useRef();

    let slideControl = () => (
        <div className="slide-control">
            <div className="left" onClick={slideRight}>
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div className="middle">
                <span>1/4</span>
            </div>
            <div className="right" onClick={slideLeft}>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
    );

    

    let slideLeft = () => {
        [firstSlide.current, secondSlide.current, thirdSlide.current].forEach((slide) => {
            if (slide.id === "first") slide.id = "second";
            else if (slide.id === "second") slide.id = "third";
            else if (slide.id === "third") slide.id = "first";
        })
    }

    let slideRight = () => {
        [firstSlide.current, secondSlide.current, thirdSlide.current].forEach(
            (slide) => {
                if (slide.id === "first") slide.id = "third";
                else if (slide.id === "second") slide.id = "first";
                else if (slide.id === "third") slide.id = "second";
            }
        );
    }

    let viewHandler = (e) => {
        if (e.target.dataset.type === "slide") {
            isGrid(false);
        } else {
            isGrid(true);
        }
    }

    return (
        <div className={`projectPage-container page`} ref={page}>
            <div className="background"></div>
            <div className={`container ${display ? null : `dim`}`}>
                <div className="project-content">
                    <div className="line"></div>
                    <div className={`about-me-title ${display ? null : `dim`}`}>
                        <h2>Projects</h2>
                    </div>

                    <div className={`select-view ${display ? null : `dim`}`}>
                        <span className={`slide-view ${grid ? null : `the-view`}`} data-type="slide" onClick={viewHandler}>Slide view</span>  <span className="divide">|</span>  <span className={`grid-view ${!grid ? null : `the-view`}`} data-type="grid" onClick={viewHandler}>Grid view</span>
                    </div>

                    <div className={`project-frame ${display ? null : `dim`}`}>
                        <div className="project-container">
                            <div id={!grid ? 'first' : null} className="first project" ref={firstSlide}></div>
                            <div className="second project" id={!grid ? 'second' : null} ref={secondSlide}></div>
                            <div className="third project" id={!grid ? 'third' : null} ref={thirdSlide}></div>
                            <div className="fourth project" id={!grid ? 'fourth' : null} >
                                {!grid? slideControl(): null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projectPage;