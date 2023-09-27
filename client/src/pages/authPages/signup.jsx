import Button from "../../components/button/button";
import { OtherNav } from "../../components/navbar/navbar";

export default function SignPage(){
    return(
        <>

<OtherNav/>
            <div className="sign">
                <div className="signWrap">

                    <div className="authSpot">                          
                        <div className="imgSec">

                        </div>
                        <div className="authFormSec">
                            <div className="formtext">
                                <h1>Imap Sign Up</h1>
                                <p>
                                    Fill in your details to get started
                                </p>
                            </div>
                            <div className="formwrap">
                                <form className="authForm">
                                    <div className="formInfo">
                                        <p>Personal Info</p>
                                        <div className="formInput">
                                            <input type="text" name="" id="" placeholder="First Name"/>
                                            <input type="text" name="" id="" placeholder="Last Name"/>
                                            <input type="text" name="" id="" placeholder="Age"/>
                                        </div>
                                    </div>

                                    <div className="formInfo">
                                        <p>Personal Info</p>
                                        <div className="formInput">
                                            <input type="text" name="" id="" placeholder="First Name"/>
                                            <input type="text" name="" id="" placeholder="Last Name"/>
                                            <input type="text" name="" id="" placeholder="Age"/>
                                        </div>
                                    </div>


                                    <div className="formSubimt">
                                        <Button className='secondary-bttn'>
                                            Sign Up
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}