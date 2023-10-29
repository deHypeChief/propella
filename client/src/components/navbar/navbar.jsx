import Button from '../button/button'
import './styles.css'

import logoLight_desk from '../../assets/icons/Logo-light.svg'
import logoLDark_desk from '../../assets/icons/logo-Dark.svg'
import logo_mobile from '../../assets/icons/logo-main.svg'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

import Menu from '../../assets/icons/Menu.png'


export function HomeNav() {
    const [open, setOpen] = useState(false)
    const hamList = useRef()
    const bttnOpen = useRef()
    const bttnClose = useRef()

    function OpenMenu() {
        if (open === false) {
            setOpen(true)
            hamList.current.style.display = 'block'
            bttnOpen.current.style.display = 'none'
            bttnClose.current.style.display = 'block'
        }
    }
    function CloseMenu() {
        if (open === true) {
            setOpen(false)
            hamList.current.style.display = 'none'
            bttnOpen.current.style.display = 'block'
            bttnClose.current.style.display = 'none'
        }
    }

    return (
        <>
            <nav>
                <div className="navWrap">
                <Link to={'/'}>
                        <div className="logoSec">

                            <div className="desk-Logo--light">
                                <img src={logoLight_desk} alt="" />
                            </div>
                                    {/* <div className="desk-Logo--dark">
            <img src={logoLDark_desk} alt="" />
        </div> */}

                            <div className="mobile-logo">
                                <img src={logo_mobile} alt="" />
                            </div>
                        </div>
                    </Link>
                    <div className="navBttn">
                        <Link to={'/onboarding'}>
                            <Button className='primary-bttn'>Become a Vendor</Button>
                        </Link>
                    </div>
                    <div className="mobileHam">
                        <div ref={bttnOpen} className="hamBox" onClick={OpenMenu}>
                            <img src={Menu} alt="" />
                        </div>

                        <div ref={bttnClose} className="hamBox-close" onClick={CloseMenu}>
                        <img src={Menu} alt="" />
                        </div>
                    </div>
                </div>

                
            </nav>
            <div ref={hamList} className="hamlist">
                <div className="backHam">
                    <li>
                        <Link to={'/about'}>
                            <p>Our Story</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/investors'}>
                            <p>Become an Investor</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/roadmap'}>
                            <p>Roadmap</p>
                        </Link>
                    </li>
                    <div className="hamBttn">
                        <Link to={'/onboarding'}>
                        <Button className='primary-bttn'>Become a vendor</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export function OtherNav() {

    const [open, setOpen] = useState(false)
    const hamList = useRef()
    const bttnOpen = useRef()
    const bttnClose = useRef()

    function OpenMenu() {
        if (open === false) {
            setOpen(true)
            hamList.current.style.display = 'block'
            bttnOpen.current.style.display = 'none'
            bttnClose.current.style.display = 'block'
        }
    }
    function CloseMenu() {
        if (open === true) {
            setOpen(false)
            hamList.current.style.display = 'none'
            bttnOpen.current.style.display = 'block'
            bttnClose.current.style.display = 'none'
        }
    }

    return (
        <>
            <nav>
                <div className="navWrap">
                    <Link to={'/'}>
                        <div className="logoSec">

                            <div className="desk-Logo--light">
                                <img src={logoLight_desk} alt="" />
                            </div>
                            {/* <div className="desk-Logo--dark">
    <img src={logoLDark_desk} alt="" />
</div> */}

                            <div className="mobile-logo">
                                <img src={logo_mobile} alt="" />
                            </div>
                        </div>
                    </Link>

                    <div className="navList">
                        <li>
                            <Link to={'/about'}>Our Story</Link>
                        </li>
                        <li>
                            <Link to={'/investors'}>Become an Investor</Link>
                        </li>
                        <li>
                            <Link to={'/roadmap'}>Roadmap</Link>
                        </li>
                    </div>

                    <div className="navBttn">
                        <Link to={'/onboarding'}>
                            <Button className='primary-bttn'>Become a Vendor</Button>
                        </Link>
                    </div>

                    <div className="mobileHam">
                        <div ref={bttnOpen} className="hamBox" onClick={OpenMenu}>
                        <img src={Menu} alt="" />

                        </div>

                        <div ref={bttnClose} className="hamBox-close" onClick={CloseMenu}>
                        <img src={Menu} alt="" />

                        </div>
                    </div>
                </div>


            </nav>
            <div ref={hamList} className="hamlist">
                <div className="backHam">
                    <li>
                        <Link to={'/about'}>
                            <p>About Us</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/investors'}>
                            <p>Investors</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/roadmap'}>
                            <p>Roadmap</p>
                        </Link>
                    </li>
                    <div className="hamBttn">
                    <Link to={'/onboarding'}>
                        <Button className='primary-bttn'>Become a vendor</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
} 