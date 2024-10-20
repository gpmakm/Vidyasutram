import Image from "next/image";
import styles from "./page.module.css";

import VidyaSutramNavbar from "@/app/VidyaSutramNavbar";
export default function Home() {
  return (
    <main className={styles.main} id="main">
       <div>
      <div id="name">
        <span id="first">Welcome to</span><span id="second">VidyaSutram Web</span> <span id="third">The website avatar of VidyaSutram</span>
      </div>
      
      

    

    </div>
      <div className="content">
        <div className="box">
          <h3>Syllabus</h3>
          <div>
            <ul>
              <li className="branch">Computer Science and Engg.
                <ul>
                  <li> <a href={"https://drive.google.com/file/d/1pkmI3rXnIjFUYISpvKyHWRlaIIDYLF6q/view?usp=drive_link"}> Semester 3</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/19XQI3F9yObL8xfO2bdgLIPMDtMovoKBC/view?usp=drive_link"}>Semester 4</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1Wyakaqq8yv1oQ5903H8LUiaWrOq3aMvk/view?usp=drive_link"}>Semester 5</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1sIxbasl0sWXv0qObEe7ZZsyFhr0KQ5Td/view?usp=drive_link"}>Semester 6</a> </li>
                </ul>
                 </li>
                 <li className="branch">Mechanical Engg.
                <ul>
                  <li> <a href={"https://drive.google.com/file/d/1JRbxfYpjlM-jcydcA2tU8OSmCf72ePwM/view?usp=drive_link"}> Semester 3</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1EZjU2nBYGRm4kw9ZBF8JQbEZ_f6mta-2/view?usp=drive_link"}>Semester 4</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1jhqsMEQ2cL4AFLM5Ba_jFlRdejMEWK9C/view?usp=drive_link"}>Semester 5</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/13XiBTtnHJizS9cRLyhUqLdGqz24OXNen/view?usp=drive_link"}>Semester 6</a> </li>
                </ul>
                 </li>
                 <li className="branch">Electrical Engg.
                <ul>
                  <li> <a href={"https://drive.google.com/file/d/1wPe4SbDJMGshobgCRXQdrkXo1MCbZMgK/view?usp=drive_link"}> Semester 3</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1XvHgpjTIrVsW5L7jnMzXXGmiU4C2xnv7/view?usp=drive_link"}>Semester 4</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/110jxRUIizk_7CvMLFF1nTkuFYyrkxeBh/view?usp=drive_link"}>Semester 5</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1TeqayHSAZjwkNGSmxVNEkJiCJU9wuoNV/view?usp=drive_link"}>Semester 6</a> </li>
                </ul>
                 </li>
                 <li className="branch">Electronics Engg.
                <ul>
                  <li> <a href={"https://drive.google.com/file/d/1pkmI3rXnIjFUYISpvKyHWRlaIIDYLF6q/view?usp=drive_link"}> Semester 3</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1lIdwFcVgm_sBUGQGtChIoJUUwRlVBvdP/view?usp=drive_link"}>Semester 4</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/19nWo5bm71nDtJ0hH6e0RgbE-Y2Haxy3E/view?usp=drive_link"}>Semester 5</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1GRDRaFMIp8OPBVx2QoY-YqiHqxUZqDcH/view?usp=drive_link"}>Semester 6</a> </li>
                </ul>
                 </li>
                 <li className="branch">Civil Engg.
                <ul>
                  <li> <a href={"https://drive.google.com/file/d/1UYSMmyfd14BbU4BtqDZeceKyq4Y_39fE/view?usp=drive_a"}> Semester 3</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1zN_Al9jJ9HIp_bdXT5gX9A4c6aRqnQJM/view?usp=drive_a"}>Semester 4</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1vReu4YCwdBVMIS1B2es6pqEuYfefQMT1/view?usp=drive_a"}>Semester 5</a> </li>
                  <li> <a href={"https://drive.google.com/file/d/1grIglXGhNtXWwyBWUeW7Gm44AYB6PKhL/view?usp=drive_link"}>Semester 6</a> </li>
                </ul>
                 </li>
            </ul>
          </div>
        </div>
        <div className="box">
          <h3>Notes</h3>
          <ul>
            <li className="subjects">
                Semester 3
                <ul>
                  <li> <a href={"https://drive.google.com/file/d/1W4MXbDoI9_HP0zfSSZAShVpohDaTT4fH/view?usp=drive_link"}>Discrete Maths</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1uunhvb2rOdmD1-bdAKzLvaAdEtbfM_mJ/view?usp=drive_link"}>C programming</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1s-J1rbQs14xba4TfoubNHSBVSz6sFhA3/view?usp=drive_link"}>Web Technology</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1hBhWDFpc6LM8kg6ZV9HO5yLYmxD6vijZ/view?usp=drive_link"}>Digital Elec. and Microprocessor</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1T77c2mOb6wanqnf2zlsie5D0hQrZlOAT/view?usp=drive_link"}>Comp. Org. and Arch.</a></li>
                </ul>
            </li>
            <li className="subjects">
                Semester 4
                <ul>
                  <li> <a href={"https://drive.google.com/file/d/11vc73SpNJWCAi3xhtOGKmcWl9jKf5P34/view?usp=drive_link"}>Database Management System</a></li>
                  <li> <a href={"/"}>Python programming</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1A-91CmRMFmVKRpi0qQzHQuJ_KSY_q5Ha/view?usp=drive_link"}>Operating System</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1ryfdUjcT7_FdHm4YfS0WVavHIqIbxhzl/view?usp=drive_link"}>DSA</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1AYQkNxXfhVl4JLojSuPPs6IwoqJd9eG3/view?usp=drive_link"}>Computer Graphics</a></li>
                </ul>
            </li>
            <li className="subjects">
                Semester 5
                <ul>
                  <li> <a href={"https://drive.google.com/file/d/1y49DxwGPjGu70Bo3RKZgofs-Md6cTDbn/view?usp=drive_link"}>Comp. Hardware and Net.</a></li>
                  <li> <a href={"https://drive.google.com/file/d/11O3GF_08grAqkIVJSNTxafgAyjVSvWBO/view?usp=drive_link"}>OOPS using JAVA</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1gXxZHPhoYea9xROCx9QM2HoRBTXK3eMj/view?usp=drive_link"}>Industrial Automation(B)</a></li>
                  <li> <a href={"https://en.wikipedia.org/wiki/Android_(operating_system)"}>Mobile Computing</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1SN0UCkaqzguJ8RbVo77Loq_9CnulWEdU/view?usp=drive_link"}>Multimedia Technology</a></li>
                </ul>
            </li>
            <li className="subjects">
                Semester 6
                <ul>
                  <li> <a href={"https://drive.google.com/file/d/1tP0uga5xlEnumaX6ZmyDOKFnQie2MCLg/view?usp=drive_link"}>Computer Network Security</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1zUrg624xbGUeBlictN9-WGIx4bhh2mBe/view?usp=drive_link"}>Software Engineering</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1Yn1aHKvimCSWxbOBWy1Ijqpriyal8oVU/view?usp=drive_link"}>Industrial Automation(A)</a></li>
                  <li> <a href={"https://drive.google.com/file/d/1J8DfXrZBgCxHzGJbDvQfKrsDW5W9yju2/view?usp=drive_link"}>Data Science</a></li>
                  <li> <a href={"https://drive.google.com/file/d/19tXRoDwOksJoObHb6vb77oOJGn86Qezr/view?usp=drive_link"}></a>Entrepreneurship and Startup</li>
                </ul>
            </li>

          </ul>
        </div>
      </div>

    </main>
  );
}
