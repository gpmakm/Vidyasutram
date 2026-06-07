"use client"

import {React,useState} from 'react'

 const page =  () => {
    const [app,setApp]=useState();
    const [user,setUser]=useState()
    const [buttonText,setButtonText]=useState('Submit my idea')
    const sendData=async (e)=>{
        e.preventDefault();
        setButtonText("Submitting...")
        let r= await fetch('/forms/form',{
            method:'POST',
            body:JSON.stringify({
                appname:app,
                user:user
            })
        ,headers:{'Content-Type':'application/json'}
    }
        )
        let data=await r.json()
        alert(data.message)
        console.log(app+user);
        console.log(data);
        setButtonText("Submit my idea")
        setApp('');
        setUser('');
        
    }
  return (
    <div>
        <form id='temp' onSubmit={sendData}> 
            <div className='field'>
                <input type="text" name="uname" id="" placeholder='Enter your name ....'  value={user} onChange={(e)=>{setUser(e.target.value)}}  />
            </div>
            <div className="field">
                <input type="text" name="appname" id="" placeholder='Enter expected app name ...' value={app} onChange={(e)=>{setApp(e.target.value)}} />
            </div>
            <button>{buttonText}</button>
        </form>
    </div>
  )
}
export default page;