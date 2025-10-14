import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "./Firebase"
import { Link, useNavigate } from 'react-router-dom'
import "./Form.css"



const Signup = () => {

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const navigate =useNavigate()

    

   async function handleSubmit(e) {
    e.preventDefault();
    try{

        const credential = await createUserWithEmailAndPassword(auth,email,password)
        const user = credential.user
        console.log(user);
        navigate("/login")
        }

        catch(err){
            console.log(err);
        }
              
       
    }
  return (
    <div className='signup'>
        <form onSubmit={handleSubmit}>
            <h1>signup here</h1>
            <input type="email" value={email} placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <input type="password" value={password} placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <button>signup</button>
                <div className='link'> Already have an acc?<Link to ="/login" style={{color:"red"}}>login</Link>

                </div>
        </form>
    </div>
  )
}

export default Signup