import React from 'react'

 const page = () => {
    const sendData=(e)=>{
        e.preventDetault();
    }
  return (
    <div>
        <form>
            <div className='field'>
                <input type="text" name="uname" id="" placeholder='Enter your name ....' />
            </div>
            <div className="field">
                <input type="text" name="appname" id="" placeholder='Enter expected app name ...' />
            </div>
            <button>Submit my idea</button>
        </form>
    </div>
  )
}
export default page;