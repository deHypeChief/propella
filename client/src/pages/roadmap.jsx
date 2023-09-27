import Footer from "../components/footer/footer";
import { OtherNav } from "../components/navbar/navbar";
import propStar from '../assets/icons/propella Star.svg'
import Button from "../components/button/button";
import '../assets/styles/roadmap.css'
export default function Roadmap(){
    return(
        <>
        <OtherNav/>

        <section className="roadmap-Page">


                <div className="extras">
                    <div className="bigStar-roadmap-">
                        <img className='start1-roadmap- starRot' src={propStar} alt="" />
                    </div>
                </div>


                <div className="roadmap-Wrap">

                    <div className="roadmap--boximg">
                        <div className="auttTopImg">
                            <img src="" alt="" />
                        </div>

                        <div className="roadmap-Text">
                            <div className="roadmap-TextWrap">
                                <p className="textFact">
                                    Did you know
                                </p>
                                <p className="justText">
                                    A quick story about propella
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="roadmap-textArea">
                        <div className="roadmap-WrapText">
                            <div className="lefttext">
                                <h1>
                                    The <br /> roadmap <br /> for propella
                                </h1>
                                {/* <div className="roadmap-BttnWrap">
                                    <Button className='secondary-bttn'>
                                        Get started
                                    </Button>
                                </div> */}
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


        <section className="roadmap-bigtext">
            <div className="btext-wrap">
                <h1>
                    We are built <br /> to <span className="bigColor">stand out</span> from the rest
                </h1>
            </div>
        </section>

        <Footer/>
        </>
    )
}