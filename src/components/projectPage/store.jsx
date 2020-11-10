const projectPage = () => {
    let [slide, setSlide] = useState(true);
    let [Dir, goDir] = useState(0);
    let firstSlide = useRef(null);
    let secondSlide = useRef(null);
    let thirdSlide = useRef(null);

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


    return (
        <section className="projectPage-container">
            <div className="projectPage-title title">
                <h3>Project</h3>
            </div>
            <div className="project-name">
                <h3>Movie Mate</h3>
            </div>
            <div className="display-divs">
                <div className="project first" ref={firstSlide} id="first"></div>
                <div className="project second" ref={secondSlide} id="second"></div>
                <div className="project third" ref={thirdSlide} id="third"></div>
                <div className="project fourth" id="fourth">
                    <div className="left" onClick={slideLeft}></div>
                    <div className="right" onClick={slideRight}></div>
                </div>
            </div>
            <div className="project-detail">
                <p className="project-about">About project: </p>
                <p className="project-stack">Project Stack: </p>
            </div>
        </section>
    );
}

display = (e) => {
        console.log(e.target.scrollTop, this.state.slideValue)
        if (e.target.scrollTop >= 300 && e.target.scrollTop > this.state.slideValue) {
            let val = e.target.scrollTop;
            console.log("done")
            this.setState({ slideValue: val });
            this.setState({ display: false });
        } else {
            let val = e.target.scrollTop;
            this.setState({ slideValue: val });
            this.setState({ display: true });
        }
    }
