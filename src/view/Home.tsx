import * as React from 'react';
import './Home.style.scss';

import SectionTitle from '../components/SectionTitle';
import FeaturesList from '../components/FeaturesList';
import Card from '../components/Card';

import tiktok from '../assets/tiktok-brands.svg';

const staticCardsData = [
    {
        img: tiktok,
        title: "抖音",
        intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor provident obcaecati quisquam, dicta numquam, omnis quam aliquid aut exercitationem consectetur asperiores nam natus voluptatum laboriosam voluptatibus deleniti. In, debitis."
    },
    {
        img: tiktok,
        title: "抖音0",
        intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor provident obcaecati quisquam, dicta numquam, omnis quam aliquid aut exercitationem consectetur asperiores nam natus voluptatum laboriosam voluptatibus deleniti. In, debitis."
    },
    {
        img: tiktok,
        title: "抖音1",
        intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor provident obcaecati quisquam, dicta numquam, omnis quam aliquid aut exercitationem consectetur asperiores nam natus voluptatum laboriosam voluptatibus deleniti. In, debitis."
    },
    {
        img: tiktok,
        title: "抖音2",
        intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor provident obcaecati quisquam, dicta numquam, omnis quam aliquid aut exercitationem consectetur asperiores nam natus voluptatum laboriosam voluptatibus deleniti. In, debitis."
    },
    {
        img: tiktok,
        title: "抖音3",
        intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor provident obcaecati quisquam, dicta numquam, omnis quam aliquid aut exercitationem consectetur asperiores nam natus voluptatum laboriosam voluptatibus deleniti. In, debitis."
    },
    {
        img: tiktok,
        title: "抖音4",
        intro: "Lorems, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor provident obcaecati quisquam, dicta numquam, omnis quam aliquid aut exercitationem consectetur asperiores nam natus voluptatum laboriosam voluptatibus deleniti. In, debitis."
    },
    {
        img: tiktok,
        title: "抖音5",
        intro: "Loredm, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor provident obcaecati quisquam, dicta numquam, omnis quam aliquid aut exercitationem consectetur asperiores nam natus voluptatum laboriosam voluptatibus deleniti. In, debitis."
    },
]

const Home:React.FunctionComponent = () => {
    React.useEffect(() => {
        const body: HTMLElement | null = document.querySelector("body");
        const header: HTMLElement | null = document.querySelector("header");

        if (body && body.classList.contains("body-dark")) {
            body.classList.remove("body-dark");
        }
        if (header && header.classList.contains("header-dark")) {
            header.classList.remove("header-dark");
        }
        const board: HTMLElement | null = document.querySelector(".App-board");
        const sideNav: HTMLElement | null = document.querySelector(".side-nav");
        if (board !== null && sideNav !== null) {
            let observer: IntersectionObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting === false) {
                        sideNav.classList.remove("sidenav-hidden");
                        sideNav.classList.add("sidenav-show");
                    }
                    if (entry.isIntersecting === true) {
                        sideNav.classList.remove("firstrun");
                        sideNav.classList.remove("sidenav-show");
                        sideNav.classList.add("sidenav-hidden")
                    }
                })
            }, {
                threshold: 0.35
            })

            observer.observe(board);
        }

    }, []);

    
    return (
        <>
            <div className="side-nav firstrun">
                <div>             
                    <p><a href="#1">What is DID</a></p>
                </div>
                <div>             
                    <p><a href="#2">What can our platform provide you?</a></p>
                </div>
                <div>             
                    <p><a href="#3">How about our production ?</a></p>
                </div>
                <div>             
                    <p><a href="#4">Currently supported plantforms</a></p>
                </div>
            </div>
            <section className="App-board">
                <div className="golbal__container">
                    <div className="App-board-in">
                        <h1>DID-Based Short Video Joint Control Platform</h1>
                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>
                        <button>
                            <span>get started</span>
                        </button>
                    </div>
                </div>
            </section>
            <section id="1">
                <div className="golbal__container">
                    <div className="what-is-did">
                    
                    <SectionTitle name="What is DID ?"></SectionTitle>
                    </div>
                </div>
            </section>
            <section id="2">
                <div className="golbal__container">
                    <div className="what-provide">
                        <SectionTitle name="What can our platform provide you?"></SectionTitle>
                        <FeaturesList></FeaturesList>
                    </div>
                </div>
            </section>
            <section id="3">
                <div className="golbal__container">
                    <div className="video-demo">
                        <SectionTitle name="How about our production ?"></SectionTitle>
                    </div>
                </div>
            </section>
            <section id="4">
                <div className="golbal__container">
                    <div className="support-plantforms">
                        <SectionTitle name="Currently supported plantforms"></SectionTitle>
                        <div className="cards-list">
                            {
                                staticCardsData.map((v) => {
                                    return (
                                        <Card 
                                            img={v.img}
                                            title={v.title}
                                            intro={v.intro}
                                            key={v.title}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Home;