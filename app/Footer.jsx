import React from 'react'
import facebook from '../public/facebook-logo.png';
import linkedin from '../public/linked-in-logo.png'
import instagram from '../public/instagram-logo.png'
import Image from 'next/image';
import gmail from '../public/gmail-logo.png'
const Footer = () => {
  return (
    <footer className="footer" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'10px', padding:'2px', backgroundColor:'#f1f1f1'}}>
      
        <p>Contact:
            <a href="mailto:aakarshm826@gmail.com"><Image src={gmail} alt="Gmail" width="30" /> aakarshm826@gmail.com</a>
            <a href="mailto:pallavimehta25j@gmail.com"><Image src={gmail} alt="Gmail" width="30" /> pallavimehta25j@gmail.com</a>
        </p>
        <p>Follow us on social media:</p>
        <ul style={{listStyleType:'none', display:'flex',flexDirection:'row', gap:'10px', justifyContent:'center', alignItems:'center'}}>
          <li><a href="https://twitter.com/yourprofile"><Image src={linkedin} width={30} height={30}/>  </a></li>
          <li><a href="https://facebook.com/yourprofile"><Image src={facebook} width={30} height={30}/></a></li>
          <li><a href="https://instagram.com/yourprofile"><Image src={instagram} width={30} height={30}/></a></li>
        </ul>
       
    </footer>
  )
}

export default Footer