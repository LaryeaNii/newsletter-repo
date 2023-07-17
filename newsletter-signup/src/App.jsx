import React, { useState } from 'react'
import './App.css'

function App() {
 

  return (
    <div className='white-card'>
       <div className='the-words'>
          <h1><b>Stay Updated!</b></h1>
          <p>Join 60,000+ product managers receiving updates on:</p>
    
              <ul className='the-list'>
                 <div className='bullet-points'>
                    <img src="./images/icon-list.svg" alt="checkmark" /> 
                    <li>Product discovery and building what matters</li>
                  </div>
                  <br />
                  <div className='bullet-points'>
                    <img src="./images/icon-list.svg" alt="checkmark" /> 
                    <li>Measuring to ensure updates are a success</li>
                  </div>
                  <br />
                  <div className='bullet-points'>
                    <img src="./images/icon-list.svg" alt="checkmark" /> 
                    <li>And much more!</li>
                  </div>
              </ul>
          
            <div className='email-container'>
                <label for="email">Email address:</label>
                <input type="email" id="email" placeholder='email@company.com'/>
                <button>Subscribe to monthly newsletter</button>
            </div>
              
  
          
        </div>
  
       <img className='pic' src="./images/illustration-sign-up-desktop.svg" alt="some keys" />
    </div>
     
  
  )
}

export default App
