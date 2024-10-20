import React from 'react'

const page = () => {
  return (
    <div id='feedPage'>
        <form method="get">
        <label htmlFor="name">Enter your name</label>
        <div>
        <input type='text' className="data" id="person_name" placeholder='Enter your email or name'/>
        </div>
        <label htmlFor="feedback">Enter your feedback</label>
        <div>
        <input type='text' className="data" id="feedback" name='feedback' placeholder='Enter your feedback'/>
        </div>
        <label htmlFor="imprvements">Enter your suggestion</label>
        <div>
        <input type='text' className="data" id="suggest" name='suggest' placeholder='Give us suggestion to improve us'/>
        </div>
        <button onClick={submitData}>Submit</button>
        </form>
    </div>
  )
}

export default page