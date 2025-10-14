import React, { useEffect, useState } from 'react'
import  {useNavigate, useParams} from "react-router-dom"
import axios from 'axios'

const Create = () => {

    const [user,setUser]= useState({
        name:"",
        age:""
    })
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then (res=>setUser(res.data))
    })

    function handleSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3000/users",user)
        navigate("/")
        
    }
  return (
    <div className='create'>
        <form onSubmit={handleSubmit}>
            <h1>create data here</h1>
            <input type="text" placeholder='enter name' name='name' onChange={((e)=>setUser({...user,[e.target.name]:e.target.value}))} />
            <br />
            <input type="number" placeholder='enter age' name='age' onChange={((e)=>setUser({...user,[e.target.name]:e.target.value}))} />
            <br />
            <button>submit</button>       
        </form>
    </div>
  )
}

export default Create