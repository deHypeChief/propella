import { useEffect } from "react";
import Button from "../../components/button/button";
import { OtherNav } from "../../components/navbar/navbar";
import { getCategory } from "../../utils/authForm";

export default function SignPage() {

    return (
        <>

            <OtherNav />
            <div className="sign">
                <div className="signWrap">

                    <div className="authSpot">
                        <div className="imgSec">
                            <img src="https://images.unsplash.com/photo-1634937734976-7b0432527d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80" alt="" />
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
                                            <input type="text" name="" id="" placeholder="First Name" />
                                            <input type="text" name="" id="" placeholder="Last Name" />
                                            <input type="text" name="" id="" placeholder="Age" />
                                        </div>
                                    </div>

                                    <div className="formInfo">
                                        <p>Personal Info</p>
                                        <div className="formInput">
                                            <input type="text" name="" id="" placeholder="First Name" />
                                            <input type="text" name="" id="" placeholder="Last Name" />
                                            <input type="text" name="" id="" placeholder="Age" />
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