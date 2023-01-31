import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'

function Homepage() {

    const [quote, setQuote] = useState('Tada!')


    useEffect (
        ()=> {
            axios.get('https://api.quotable.io/quotes')
            .then(res =>{
                console.log(res.results)
        const num = Math.floor(Math.random() * 18)
        console.log(num)
        setQuote({
            quote: res.results[num].content})
            })
            .catch(err => console.log(err))
        },[]
    )
          
         
           

  return (
    <div className='quote-container'>
      <div className='quote-box'>
        <p>{quote}</p>
        <button onClick={setQuote}>Click to get a new quote!</button>
      </div>
    </div>
  )
}

export default Homepage
