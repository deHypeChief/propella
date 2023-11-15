import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import { OtherNav } from "../../components/navbar/navbar";

import '../../assets/styles/auth.css'

export default function ValidPage(){
    return(
         <>
            <OtherNav/>
        <section className="valid-section">
            <h1>
                Hello, <br />
                Your account has being created
                
            </h1>
            <br />
            <br />
            <Link to={'/'}><Button className='secondary-bttn'>Go Home</Button></Link>
        </section>
        </>
    )
}