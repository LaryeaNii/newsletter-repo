import React, { useState } from 'react';
import './App.css';
import Thanking from './Thanking';

function App() {
  const [card, setCard] = useState(false);
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setHasError(false);
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setHasError(true);
    } else if (!emailRegex.test(email)) {
      setHasError(true);
    } else {
      handleClick();
    }
  };
  
  

  function handleClick() {
    setCard((prevalue) => !prevalue);
  }

  return (
    <div>
      {!card && (
        <div className="white-card">
          <div className="the-words">
            <h1>
              <b>Stay Updated!</b>
            </h1>
            <p>Join 60,000+ product managers receiving updates on:</p>

            <ul className="the-list">
              <div className="bullet-points">
                <img src="./images/icon-list.svg" alt="checkmark" />
                <li>Product discovery and building what matters</li>
              </div>
              <br />
              <div className="bullet-points">
                <img src="./images/icon-list.svg" alt="checkmark" />
                <li>Measuring to ensure updates are a success</li>
              </div>
              <br />
              <div className="bullet-points">
                <img src="./images/icon-list.svg" alt="checkmark" />
                <li>And much more!</li>
              </div> 
            </ul>

            <form onSubmit={handleSubmit}>
              <div className="email-container">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="email@company.com"
                  className={hasError ? 'error' : ''}
                />
                <button>Subscribe to the monthly newsletter</button>
              </div>
            </form>
          </div>

          <img className="pic" src="./images/illustration-sign-up-desktop.svg" alt="some pic" />
        </div>
      )}

      {card && <Thanking mail={email} dismiss={handleClick} />}
    </div>
  );
}

export default App;
