import Button from '../button/button'
import './styles.css'

import logoLight_desk from '../../assets/icons/Logo-light.svg'
import logoLDark_desk from '../../assets/icons/logo-Dark.svg'
import logo_mobile from '../../assets/icons/Logo-main.svg'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'


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
                        <Link to={'/onbording'}>
                            <Button className='primary-bttn'>Become a Vendor</Button>
                        </Link>
                    </div>
                    <div className="mobileHam">
                        <div ref={bttnOpen} className="hamBox" onClick={OpenMenu}>

                        </div>

                        <div ref={bttnClose} className="hamBox-close" onClick={CloseMenu}>

                        </div>
                    </div>
                </div>

                
            </nav>
            <div ref={hamList} className="hamlist">
                <div className="backHam">
                    <li>
                        <Link to={'/about'}>
                            <p>About</p>
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
                            <Link to={'/about'}>About Us</Link>
                        </li>
                        <li>
                            <Link to={'/investors'}>Investors</Link>
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

                        </div>

                        <div ref={bttnClose} className="hamBox-close" onClick={CloseMenu}>

                        </div>
                    </div>
                </div>


            </nav>
            <div ref={hamList} className="hamlist">
                <div className="backHam">
                    <li>
                        <Link to={'/about'}>
                            <p>About</p>
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