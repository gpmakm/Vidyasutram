import React from 'react'
import Link from 'next/link'
const VidyaSutramNavbar = () => {
  return (
    <nav>
      <span>VidyaSutram</span>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/developers"}>Developers</Link></li>
        
      </ul>
    </nav>
  )
}

export default VidyaSutramNavbar