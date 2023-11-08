import Footer from "../components/footer/footer";
import { OtherNav } from "../components/navbar/navbar";
import propStar from '../assets/icons/propella Star.svg'
import Button from "../components/button/button";
import '../assets/styles/roadmap.css'
export default function Roadmap() {
    return (
        <>
            <OtherNav />

            <section className="roadmap-Page">




                <div className="roadmap-Wrap">


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

            <section className="roadmap-cards">

                <div className="cardParent">
                    <div className="cardWrap">

                        <div className="card ca-1">
                            <div className="cardOverlay"></div>
                            <div className="header">
                                <p>2021</p>
                                <h2>Nov - Dec</h2>
                                <p className="card_info">
                                    feasibility study and market research
                                    about Propella product within Emab and Banx plaza Abuja.
                                </p>
                            </div>
                        </div>


                        <div className="card ca-1">
                            <div className="cardOverlay"></div>
                            <div className="header">
                                <p>2021</p>
                                <h2>Nov - Dec</h2>
                                <p className="card_info">
                                    feasibility study and market research
                                    about Propella product within Emab and Banx plaza Abuja.
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

            <Footer />
        </>
    )
}