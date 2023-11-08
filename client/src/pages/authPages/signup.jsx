import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import { OtherNav } from "../../components/navbar/navbar";
import { createUsers, getCategory } from "../../utils/authForm";
import { useNavigate } from "react-router-dom";


export default function SignPage() {
    const [categories, setCategories] = useState(['loading'])

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        bussinessName: '',
        shopNumber: '',
        category: 'select Type',
    })
    const [userInfoErr, setInfoErr] = useState(null)
    const [userInfo, setInfo] = useState(null)
    const navigate = useNavigate()
    // console.log(userData);
                    
    useEffect(()=>{
        getCategory(setCategories)
    }, [])

    const handelChange = (e)=>{
        const  {name, value} = e.target
        setUserData(
            (prevFormData)=>({...prevFormData, [name]: value})
        )
    }

    function handleSubmit(event){
        event.preventDefault()

        createUsers(userData, setInfo, setInfoErr).then(()=>{
            alert(`${userInfo.data.data.username} \n You have been added to the waitlist`)
        
            console.log(userInfo)
        }).finally(()=>{
            navigate('/onboarding/userCreated')
        })
        
    }

    // console.log(categories);

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
                                <form className="authForm" autoComplete="off" onSubmit={handleSubmit}>
                                    <div className="formInfo">
                                        <p>Personal Info</p>
                                        <div className="formInput">
                                            <input type="text" onChange={handelChange} name="name" id="name" placeholder="Full Name" value={userData.name}  required/>

                                            <input type="text" name="bussinessName" onChange={handelChange} value={userData.bussinessName}  id="bussinessName" placeholder="Bussiness Name" required />

                                            <input type="text" name="shopNumber" onChange={handelChange} value={userData.shopNumber}   id="shopNumber" placeholder="Shop Number"  required/>

                                            <select name="category" value={userData.category} required onChange={handelChange}  id="category">
                                            <option value="select category">Select Category</option>
                                                {
                                                    categories.map((items, index)=>{
                                                        return(
                                                            <option value={items} key={`${items}${index}`}>{items}</option>
                                                        )
                                                    })
                                                }
                                            </select>

                                            <select name="shopType" value={userData.shopType} required onChange={handelChange}  id="shopType">
                                                <option value="-select shop type-">Select Your Shop</option>
                                                <option value="imap">Banex</option>
                                                <option value="imap2">Emab</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="formInfo">
                                        <p>Work Info</p>
                                        <div className="formInput">
                                            <input type="text" name="username" value={userData.username} id="username" onChange={handelChange}  placeholder="Username" required />

                                            <input type="email" name="email" id="email" value={userData.email} onChange={handelChange}  placeholder="Email" required />
                                            
                                            <input type="password" name="password" value={userData.password} onChange={handelChange}  id="password" placeholder="Password" required />
                                            
                                            <input type="password" value={userData.confirmPassword} name="confirmPassword" onChange={handelChange}  id="confirmPassword" required placeholder="Confirm Password" />

                                        </div>
                                    </div>
                                    <div className="formSubimt">
                                    <p className="error">{userInfoErr ? userInfoErr.response.data.error: ''}</p>
                                        <Button submit={handleSubmit} className='secondary-bttn' >
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

