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
                            The Future <br /> Of E-commerce
                        </h1>
                        <h1 className="footerText-mobile">
                            The <br /> Future Of  <br />E-commerce
                        </h1>
                    </div>
                    <div className="footerTop-bttn">
                        <Button className="secondary-bttn">Work with us</Button>
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
                                    <Link to={'/about'}>About Us</Link>
                                </li>
                                <li>
                                    <Link to={'/investors'}>Investor</Link>
                                </li>
                                <li>
                                    <Link to={'/roadmap'}>Roadmap</Link>
                                </li>
                                <li>
                                    <Link to={'/onboarding'}>Get Started</Link>
                                </li>
                            </div>
                        </div>

                        <div className="footer-link-social">
                            <p className="footer-smalltext">
                                Our Contacts
                            </p>
                            <div className="footer-contacts">
                                <p>Big Apple Turn 22 str, London</p>
                                <p>example@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}