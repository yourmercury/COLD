import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/homePage/homePage";
import AboutPage from "./components/aboutPage/aboutPage";
import NavBar from "./components/navBar/navBar";
import ProjectPage from "./components/projectPage/projectPage";
import ContactPage from "./components/contactPage/contactPage";
import "./font-awesome/css/font-awesome.css";


class App extends Component {
    state = {
        display: true,
        slideValue: 0,
        aboutDisplay: false,
        projectDisplay: false,
        contactDisplay: false,
    }

    componentDidMount() {

        let intersectionOptions = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: .6,
        }


        let intersectionCallBack = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.target.classList.contains('aboutPage-container') && entry.isIntersecting) {
                    this.setState({ aboutDisplay: true });
                    observer.unobserve(entry.target)
                }
                else if (entry.target.classList.contains('projectPage-container') && entry.isIntersecting) {
                    this.setState({ projectDisplay: true });
                    observer.unobserve(entry.target)
                }
                else if (entry.target.classList.contains('contactPage-container') && entry.isIntersecting) {
                    this.setState({ contactDisplay: true });
                    observer.unobserve(entry.target)
                }
            })
        }

        let observer = new IntersectionObserver(intersectionCallBack, intersectionOptions);

        let pages = document.querySelectorAll(".page");
        pages.forEach(page => {
            observer.observe(page);
        });

        let self = this;
        document.addEventListener("click", (e) => {
            let body = document.querySelector("body");
            if (body.clientWidth < 741) {
                if (e.target.id === "nav-pack" || (e.target.parentNode.id === "nav-pack" && e.target.id !== "nav-remove") || e.target.id === "nav-ham" || e.target.id === "hr") {
                    document.querySelector("#nav-pack").style.transform = "translateX(-100%)"

                    let pages = document.querySelectorAll(".page");
                    pages.forEach(page => {
                        page.style.filter = 'blur(7px)';
                    });

                } else if (e.target.id === "nav-remove" || e.target.id !== "nav-pack" || e.target.parentNode.id !== "nav-pack") {
                    document.querySelector("#nav-pack").style.transform = "translateX(0%)";

                    let pages = document.querySelectorAll(".page");
                    pages.forEach(page => {
                        page.style.filter = 'blur(0px)';
                    });
                }
            }
        })

        document.addEventListener("scroll", function() {
            if (!document.documentElement) {
                this.documentElement = document.body;
            }

            if (document.documentElement.scrollTop >= 300 && document.documentElement.scrollTop > self.state.slideValue) {
                let val = document.documentElement.scrollTop;
                self.setState({ slideValue: val });
                self.setState({ display: false });
            } else {
                let val = document.documentElement.scrollTop;
                self.setState({ slideValue: val });
                self.setState({ display: true });
            }

            if (document.documentElement.scrollTop < 50) {
                this.querySelector(".navBar-container").style.backgroundColor = "rgba(0,0,0,0)";
                this.querySelector(".navBar-container").style.boxShadow = "none";

            } else {
                this.querySelector(".navBar-container").style.backgroundColor = " rgba(255, 255, 255, 0.9)";
                this.querySelector(".navBar-container").style.boxShadow = "0 0 15px 0px rgb(105, 105, 105)";
            }

        });
    }

    render() {
        return (
            <div onScroll={this.display} className="App-container">
                <NavBar display={this.state.display} />
                <HomePage />
                <a id="aboutPage"><AboutPage display={this.state.aboutDisplay} /></a>
                <a id="projectPage"><ProjectPage display={this.state.projectDisplay} /></a>
                <a id="contactPage"><ContactPage display={this.state.contactDisplay} /></a>
            </div>
        );
    }
}

export default App;
