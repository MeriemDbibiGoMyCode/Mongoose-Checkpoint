import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { postContact } from '../api/contact';
import { useNavigate } from 'react-router';

const Add = () => {
  let navigate = useNavigate();
  const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [age,setAge]=useState('')

  const handleSubmit=async(value)=>{
await postContact(value)
// console.log('addingContact',handleSubmit),
 navigate('/contacts')

  }

  return (
    <div>
     
   <div >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={age}
          onChange={(e)=>setAge(e.target.value)}
        />
      </label>
      <label>
        email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}

        />
      </label>
      <button onClick={()=>handleSubmit({name,age,email})} >Add user </button>
   
    </div>

  </div>
  )
}

export default Add