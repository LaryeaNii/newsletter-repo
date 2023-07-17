import React from "react";


export default function Thanking({mail, dismiss}){
    return(
        <div className='thank-white-card'>
        <div className='thank-the-words'>
            <img src="/images/icon-success.svg" alt="icon" />
           <h1><b>Thanks for subscribing!</b></h1>
           <p>A confirmation email has been sent to <span className="the-mail">{mail}</span>. Please open it and click the button inside for confirmation</p>
                 <button className="dismiss" onClick={dismiss}>Dismiss Message</button>
          
         </div>
     </div>
      
   
    )
}