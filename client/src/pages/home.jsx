import '../assets/styles/home.css'
import Button from '../components/button/button'
import Footer from '../components/footer/footer'

import propStar from '../assets/icons/propella Star.svg'
import bluePropStar from '../assets/icons/bluePropStar.svg'
import { Link } from 'react-router-dom'
import { HomeNav } from '../components/navbar/navbar'



import iPhone from '../assets/images/iPhone.png'
import Loading from './loadinngPages/loading'
import { useEffect, useRef, useState } from 'react'
export default function Home() {
    const [ready, setReady] = useState(false)
    const loadRedf = useRef()

    useEffect(() => {
        setTimeout(() => {
            setReady(true)
            // loadRedf.current.style.display = 'none'
        }, 5000);
    }, [])
    return (
        <>

            {
                ready === false?(
                    <div className="loadingwrap" ref={loadRedf}>
                        <Loading />
                    </div>
                ):(
                    <div className="homeContent">
                    <HomeNav />
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
                                    Connecting high-end physical stores in Africa
                                </p>
                            </div>
                            <div className="hero-bttnWrap">
    
                                <Link to='/about'>
                                    <Button className='secondary-bttn'>Our Story</Button>
                                </Link>
    
                                <Link to='/investors'>
                                    <Button className='secondary-bttn'>Become an Investor</Button>
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
                </div>  
                )
            }  
        </>
    )
}