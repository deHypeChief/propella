import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import { OtherNav } from "../../components/navbar/navbar";

export default function ValidPage(){
    return(
        <section>
            <OtherNav/>
            <h1>
                Hello, <br />
                Your account has being created
                <Link to={'/'}><Button className='secondary-bttn'>Go Home</Button></Link>
            </h1>
        </section>
    )
}