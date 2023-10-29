import '../assets/styles/about.css'
import mainLogo from '../assets/icons/logo-main.svg'

import propStar from '../assets/icons/propella Star.svg'
import Button from "../components/button/button";
import Footer from '../components/footer/footer';
import { OtherNav } from '../components/navbar/navbar';

export default function About() {
    return (
        <>

            <OtherNav/>

            <section className="intro">
                <div className="bigStar">
                    <img className='intro-start1 starRot' src={propStar} alt="" />
                </div>
                <div className="intro-wrap">


                    <div className="introText">
                        <h1>
                            How did <br /> the journey <br /> start?
                        </h1>
                        <div className="introBttn">
                            <Button className='secondary-bttn'>View More</Button>
                        </div>
                        <p>A short story on the journey of propella and any other related story dimed fit to be on screen. Trying to engage the reader is the best option.</p>

                        <p>A short story on the journey of propella and any other related story dimed fit to be on screen. Trying to engage the reader is the best option.</p>
                    </div>

                    <div className="introImg">
                        <div className="intro-imgBox"></div>
                    </div>
                </div>
            </section>

            <section className="culture">
                <div className="culture-intro">
                    <div className="cultureheader cultureText-dm">
                        <h1>Our <br /> Culture & Vision</h1>
                    </div>

                    <p>A short story on the journey of propella and any other related story dimed fit to be on screen. Trying to engage the reader is the best option.</p>
                </div>


                <div className="destop-cultureBox">
                    <div className="culture-gridbox">
                        <div className="box1">
                            <h1>
                                WE <br /> ARE NEW
                            </h1>
                        </div>
                        <div className="box2">
                            <div className="boxTextInspire">
                                <h1>Our Culture</h1>
                                <p>A short story on the journey of  propella and any other related story dimed fit to be on screen.</p>
                            </div>
                        </div>
                        <div className="box3">
                            <div className="boxTextInspire">
                                <h1>Our Culture</h1>
                                <p>A short story on the journey of  propella and any other related story dimed fit to be on screen.</p>
                            </div>
                        </div>
                        <div className="box4">
                            <div className="box-Culture">
                                <img src={mainLogo} alt="" />
                            </div>
                        </div>
                        <div className="box5">
                            <h1>The Hybrid <br /> E-commerce</h1>
                        </div>

                    </div>
                </div>
            </section>

            <section className="spoils">
                <div className="spoils-wrap">
                    <div className="spoil-Text">
                        <h1>
                            Some of Our <br /> Best Spoils
                        </h1>
                        <p>
                            A short story on the journey of propella and any other related story dimed fit to be on screen. Trying to engage the reader is the best option.
                        </p>
                    </div>

                    {/* spoiies area */}
                </div>
            </section>


            <section className="faqs">
                <div className="faqsWrap">
                    <div className="textFaq">
                        <h1>Popular FAQs</h1>
                    </div>

                    <div className="faqlist">
                        <li>
                            <div className="faqbox">
                                <div className="faq-text-section">
                                    <p>What is Propella</p>
                                    <div className="box"></div>
                                </div>
                                <div className="subFaqs">
                                    <p>
                                        A short story on the journey of propella and any other related story dimed fit to be on screen. Trying to engage the reader is the best option.
                                    </p>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div className="faqbox">
                                <div className="faq-text-section">
                                    <p>What is Propella</p>
                                    <div className="box"></div>
                                </div>
                                <div className="subFaqs">
                                    <p>
                                        A short story on the journey of propella and any other related story dimed fit to be on screen. Trying to engage the reader is the best option.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}