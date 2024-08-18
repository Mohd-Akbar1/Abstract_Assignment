import React, { useEffect, useState } from 'react'
import "./home.css";
import axios  from 'axios';

const Home = () => {
    const [card,setcard]=useState([])

    useEffect(()=>{
        const fetchAPI=async()=>{
            const resp=await axios.get('http://localhost:8000/cards')
            const data=resp.data
            setcard(data)

        }
        fetchAPI()
    },[])
  return (
    <div className='Home'>
        {card.map((cards)=>(
             <div className='card'>
             <b>{cards.title}</b>
          
             <p>{cards.description}</p>
         </div>

        ))}
      
      
        
       </div>
      
 
  )
}

export default Home
