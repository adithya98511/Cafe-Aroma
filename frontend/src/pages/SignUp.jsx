import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import 


function Signup() {
    const history=useNavigate();

    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [dob,setDob]=useState('')
    const [country,setCountry]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')




    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            });;
           

        }
        catch(e){
            console.log(e);

        }

    }

    


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
            <input type="text" onChange={(e) => { setFirstname(e.target.value) }} placeholder="Firstname"  />
            <input type="text" onChange={(e) => { setLastname(e.target.value) }} placeholder="Lastname"  />
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
            <input type="date" onChange={(e) => { setPassword(e.target.value) }} placeholder="Date of Birth" />
            <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Username"  />

            <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>

        </div>
    )
}

export default Signup