import React, { useEffect, useState } from 'react'
import './form.css'
import Nav from '../assets/Nav/Nav'
import axios  from 'axios';

const Form = () => {
    const [title,setTitle]=useState('')
    const [carddata,setcarddata]=useState([])
    const [Description,setDescription]=useState('')

    const submitForm=async()=>{
        console.log(title,Description)
        setTitle('')
        setDescription('')

        try {
            // POST request to the API
            const response = await axios.post('http://localhost:8000/cards', {
              title: title,
              description: Description,
            });
      
           
           
      
            // Clear form fields
            setTitle('');
            setDescription('');
            
          } catch (err) {
            // Handle errors
            console.error('Error submitting form:', err);
            
          }
        
    }

    

    
        
        
   
    
  return (
    <div >
        <Nav/>
        <div className="formContainer">
            <div className="userData">
                <label htmlFor="title">Title:</label>
                <input type="text" name="" id="title" placeholder='Enter Title..' onChange={e=>setTitle(e.target.value)} value={title} />

                <label htmlFor="title">Description :</label>
                <textarea name="" id="" onChange={e=>setDescription(e.target.value)} value={Description}></textarea>
                <button className='formbtn' onClick={submitForm}>Submit</button>

                

            </div>
        </div>
   
      
    </div>
  )
}

export default Form
