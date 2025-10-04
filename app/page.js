import Image from "next/image";
import styles from "./page.module.css";

import VidyaSutramNavbar from "@/app/VidyaSutramNavbar";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main} id="main">
       <div>
      <div id="name">
        <span id="first">Welcome to</span><span id="second">VidyaSutram Web</span> <span id="third">The website avatar of VidyaSutram</span>
      </div>
      
      

    

    </div>
      <div className="content">
        <div className="dabba"> <a href={"/syllabus"} style={{backgroundColor:'green'}}>Syllabus</a> </div>
       <div className="dabba"> <a href={"/notes"} style={{backgroundColor:'green'}}>Notes</a> </div>
      </div>

    </main>
  );
}