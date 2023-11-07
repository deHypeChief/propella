import { Link } from 'react-router-dom'
import Button from '../button/button'
import './style.css'
export default function Footer() {
    return (
        <footer>
            <div className="footer-Top">
                <div className="footerTop-img">

                </div>


                <div className="footTextSec">
                    <div className="footerTop-text">
                        <h1 className="footerText-desktop">
                        Invest in the <br /> future of African <br />E-commerce

                        </h1>
                        <h1 className="footerText-mobile">
                        Invest in the future of African E-commerce

                        </h1>
                    </div>
                    <div className="footerTop-bttn">
                        <Button className="secondary-bttn">Allocate Capital Today</Button>
                <br /><br />
                <br /><br />
                        <h2>rasied over $20000</h2>
                    </div>
                </div>
                
            </div>

            <div className="footer-Buttom">
                <div className="footerButtom-wrap">
                    <div className="footer-logoSection">
                        <img src="" alt="" />
                    </div>

                    <div className="footer-link">
                        <div className="footer-lastcontent">
                            <p className="footer-smalltext">
                                Quick Links
                            </p>
                            <div className="footer-quickLinks">
                                <li>
                                    <Link to={'/about'}>Our Story</Link>
                                </li>
                                <li>
                                    <Link to={'/investors'}>Investor</Link>
                                </li>
                                <li>
                                    <Link to={'/roadmap'}>Roadmap</Link>
                                </li>
                                <li>
                                    <Link to={'/onboarding'}>Legal</Link>
                                </li>
                            </div>
                        </div>

                        <div className="footer-link-social">
                            <p className="footer-smalltext">
                                Our Contacts
                            </p>
                            <div className="footer-contacts">
                                <p>Designed by FirstClassPilot.</p>
                                <p>hi@propella.tech</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_last" style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <p>
All rights reserved. 2023 Propella Technologies Limited 

                </p>
            </div>
        </footer>
    )
}

