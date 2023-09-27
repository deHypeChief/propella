import Button from "../components/button/button";
import Footer from "../components/footer/footer";
import { OtherNav } from "../components/navbar/navbar";
import '../assets/styles/auth.css'
import propStar from '../assets/icons/propella Star.svg'

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
                        <div className="auttTopImg">
                            <img src="" alt="" />
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
                                    <Button className='secondary-bttn'>
                                        Get started
                                    </Button>
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