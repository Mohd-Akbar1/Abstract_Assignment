import React, { useEffect, useState } from 'react'
import './earch.css'
import { HiMagnifyingGlass } from "react-icons/hi2";
import axios  from 'axios';
import { IoIosCloseCircle } from "react-icons/io";

const Search = () => {
  const [card,setcard]=useState('')
  const [results, setResults] = useState('');

    

    const handlesearch=async()=>{
      console.log('clicked')
      try {
        const response = await axios.get('http://localhost:8000/cards/title', {
          params: { q: card } // Sending the search query as a parameter
          
        });
       
        setResults(response.data)
        console.log('res',results)

      } catch (error) {
        console.log('error occured')
        
      }
    }

    const handleclose=()=>{
      setResults('')
      setcard('')
    }

  return (
    <div className='MainSearchBoxContainer'>
        <div className="searchContainer">
            <p className='animate__animated animate__fadeInDown'>How can we Help you?</p>
            <div className="searchBar">
                 <input type="text" placeholder='search...' id='Inputsearch' onChange={e=>setcard(e.target.value)} value={card}/>
              
                <HiMagnifyingGlass className='searchIcon' onClick={handlesearch} />
                
            
            </div>
        </div>

        <div>
                {results? (
                    <div className='card searchcard'>
                     
                      <p className='searchresult'>{results.title}</p>
                      <p>{results.description}</p>
                      <IoIosCloseCircle  className='closebtn' onClick={handleclose}/>
                    </div>

                ) : (
                   null
          
                )}
            </div>
      
    </div>
  )
}

export default Search
