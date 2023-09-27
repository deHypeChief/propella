import Button from "../components/button/button";
import '../assets/styles/investors.css'
import Footer from "../components/footer/footer";
import { OtherNav } from "../components/navbar/navbar";

export default function Investors(){
    return(
        <>
        <OtherNav/>
            <section className="investors">
                <div className="investwrap">
                    <h1>
                        Dear <br /> Investors
                    </h1>
                    <div className="investBttn">
                        <Button className="secondary-bttn">Join Us</Button>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}