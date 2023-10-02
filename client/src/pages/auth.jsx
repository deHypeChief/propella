import Button from "../components/button/button";
import Footer from "../components/footer/footer";
import { OtherNav } from "../components/navbar/navbar";
import '../assets/styles/auth.css'
import propStar from '../assets/icons/propella Star.svg'
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Auth() {
    return (
        <>
            <OtherNav />

            <section className="authPage">


                <div className="extras">
                    <div className="bigStar-auth">
                        <img className='start1-auth starRot' src={propStar} alt="" />
                    </div>
                </div>


                <div className="authWrap">

                    <div className="auth-boximg">
                        <div className="auttTopImg-auth">
                            <img src="https://images.unsplash.com/photo-1635766854867-c141bdafbf1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" alt="" />
                        </div>

                        <div className="authText">
                            <div className="authTextWrap">
                                <p className="textFact">
                                    Did you know
                                </p>
                                <p className="justText">
                                    A quick story about propella
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="authtextArea">
                        <div className="authWrapText">
                            <div className="lefttext">
                                <h1>
                                    Let's <br /> get you up <br /> to speed
                                </h1>
                                <div className="authBttnWrap">
                                    <Link to='/onboarding/signup'>
                                    <Button className='secondary-bttn'>
                                        Get started
                                    </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="subtext-simLayout">
                                <p>
                                    a short story on propella and any other story dim fit or relating to the story of propella.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

