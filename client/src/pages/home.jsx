import '../assets/styles/home.css'
import Button from '../components/button/button'
import Footer from '../components/footer/footer'

import propStar from '../assets/icons/propella Star.svg'
import bluePropStar from '../assets/icons/bluePropStar.svg'
import { Link } from 'react-router-dom'
import { HomeNav } from '../components/navbar/navbar'



import iPhone from '../assets/images/iPhone.png'
export default function Home() {
    return (
        <>
            <HomeNav/>

            <section className="hero">
                <div className="extras">
                    <div className="bigStar">
                        <img className='start1 starRot' src={propStar} alt="" />
                        <img className='start2 starRot' src={bluePropStar} alt="" />
                    </div>
                </div>
                <div className="hero-wrap">
                    <div className="hero-MainText">
                        <h1>I'm</h1>
                        <h1>Propella</h1>
                        <p className="hero-subtext">
                            Building the future of E-commerce & in Africa
                        </p>
                    </div>
                    <div className="hero-bttnWrap">

                        <Link to='/about'>
                            <Button className='secondary-bttn'>About Us</Button>
                        </Link>

                        <Link to='/investors'>
                            <Button className='secondary-bttn'>Investors</Button>
                        </Link>
                        
                        <Link to={'/roadmap'}>
                        <Button className='secondary-bttn'>Roadmap</Button>
                        </Link>
                    </div>
                </div>
            </section>


            <section className="protoype">
                <div className="protoypeWrap">
                    <div className="prototype-Background">
                        <div className="prototype-Mask">
                                <img src={iPhone} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}