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
    return (
        <>
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
            <section>
                <div className="golbal__container">
                    <div className="what-is-did">
                    <SectionTitle name="What is DID ?"></SectionTitle>
                    </div>
                </div>
            </section>
            <section>
                <div className="golbal__container">
                    <div className="what-provide">
                        <SectionTitle name="What can our platform provide you?"></SectionTitle>
                        <FeaturesList></FeaturesList>
                    </div>
                </div>
            </section>
            <section>
                <div className="golbal__container">
                    <div className="video-demo">
                        <SectionTitle name="How about our production ?"></SectionTitle>
                    </div>
                </div>
            </section>
            <section>
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