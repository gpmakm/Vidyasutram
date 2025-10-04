"use client";
import { useEffect } from "react";

import Image from "next/image";
export default function Page() {
  useEffect(() => {
    // Typed.js setup
    // import("typed.js").then((Typed) => {
    //   new Typed.default("#portfolio-typed-text", {
    //     strings: ["Web Developer", "Video Editor", "App Developer"],
    //     typeSpeed: 50,
    //     loop: true,
    //   });
    // });

    // Toggle project details
    const toggleButtons = document.querySelectorAll(".portfolio-toggle-btn");
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const details = button.previousElementSibling;
        if (!details) return;
        if (details.style.display === "none" || details.style.display === "") {
          details.style.display = "block";
          button.innerText = "Show Less";
        } else {
          details.style.display = "none";
          button.innerText = "Show More";
        }
      });
    });
  }, []);

  return (
    <main>
      <header className="pf-header">
        <nav className="pf-nav">
          <div className="pf-nav-left">Portfolio</div>
          <ul className="pf-nav-right">
            <li><a href="#pf-about">About</a></li>
            <li><a href="#pf-skills">Skills</a></li>
            <li><a href="#pf-projects">Projects</a></li>
            <li><a href="#pf-contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="pf-about" className="pf-about-section">
        <div className="pf-about-left">
          <h1>
            Hi, My name is <span className="pf-highlight">Pallavi</span>
          </h1>
          <div>and I am a Passionate</div>
          <span id="portfolio-typed-text" className="pf-typed-text"></span>
          <div className="pf-about-buttons">
            <a
              href="https://drive.google.com/file/d/1gj75Al45qw0kvUSbhi_O7blmn5IxEn7h/view?usp=drivesdk"
              className="pf-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://github.com/pallavikumari28-hub"
              className="pf-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="pf-about-right">
          <img
            src="https://th.bing.com/th/id/OIP.TH32Nf6QKzKvcpnjPVzrUQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"
            alt="developer"
            className="pf-about-img"
          />
        </div>
      </section>

      <section id="pf-skills" className="pf-skills-section">
        <h2>Skills</h2>
        <div className="pf-skills-grid">
          <div className="pf-skill-card">
            <img
              src="https://www.bing.com/th/id/OIP.PhYSvWnL3VVzmEjI1KeqzQHaHa?w=197&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2"
              alt="HTML"
              className="pf-skill-img"
            />
            <h3>HTML</h3>
            <p>
              HTML (HyperText Markup Language): Standard language to create the
              structure of web pages.
            </p>
          </div>

          <div className="pf-skill-card">
            <img src="../public/css.jpg" alt="CSS" className="pf-skill-img" />
            <h3>CSS</h3>
            <p>
              CSS (Cascading Style Sheets): Used to style and layout HTML
              elements with colors, fonts, and responsive design.
            </p>
          </div>

          <div className="pf-skill-card">
            <img
              src="https://www.bing.com/th/id/OIP.TOSiFsv3R2CueD9_EXwlqgHaKv?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2"
              alt="JS"
              className="pf-skill-img"
            />
            <h3>JavaScript</h3>
            <p>
              JavaScript: Makes web pages interactive with dynamic content and
              animations.
            </p>
          </div>

          <div className="pf-skill-card">
            <img
              src="https://th.bing.com/th/id/OIP.C4OkORMzzNh68jeDRK3PzAHaHk?w=167&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"
              alt="App Dev"
              className="pf-skill-img"
            />
            <h3>App Development</h3>
            <p>
              Create mobile or desktop apps using Android Studio, Flutter, or
              Xcode.
            </p>
          </div>

          <div className="pf-skill-card">
            <img src="video editing logo.webp" alt="Video Editing" className="pf-skill-img" />
            <h3>Video Editing</h3>
            <p>
              Editing video clips, adding effects, music, and transitions.
            </p>
          </div>
        </div>
      </section>

      <section id="pf-projects" className="pf-projects-section">
        <h2>Projects</h2>

        <div className="pf-project-card">
          <h3>Hospital Management System</h3>
          <img src="hospital.jpg" alt="Hospital Project" />
          <div className="pf-project-details">
            <p>
              Web-based interface for hospital tasks: registration, appointments,
              and records.
            </p>
          </div>
          <button className="portfolio-toggle-btn">Show More</button>
        </div>

        <div className="pf-project-card">
          <h3>Healthy Recipe Card</h3>
          <img src="Screenshot (42) copy.png" alt="Recipe Card" />
          <div className="pf-project-details">
            <p>
              Responsive recipe cards with filters, search, and review options.
            </p>
          </div>
          <button className="portfolio-toggle-btn">Show More</button>
        </div>

        <div className="pf-project-card">
          <h3>SBI Login Page Clone</h3>
          <img src="Screenshot (44).png" alt="SBI Clone" />
          <div className="pf-project-details">
            <p>
              Mimics SBI NetBanking login page with frontend validation.
            </p>
          </div>
          <button className="portfolio-toggle-btn">Show More</button>
        </div>
      </section>

      <section id="pf-contact" className="pf-contact-section">
        <h2>Contact Me</h2>
        <form className="pf-contact-form">
          <label htmlFor="pf-name">Name</label>
          <input type="text" id="pf-name" name="name" required />

          <label htmlFor="pf-email">Email</label>
          <input type="email" id="pf-email" name="email" required />

          <label htmlFor="pf-message">Message</label>
          <textarea id="pf-message" name="message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="pf-footer">
        <p>&copy; 2025 Pallavi | All rights reserved.</p>
        <div className="pf-footer-socials">
          <a href="https://github.com/pallavikumari28-hub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/pallavi-kumari-94018b305" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:pallavi25j@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>

      <style jsx>{`
        main {
          background-color: #1e1b3a;
          color: #f4f4f4;
          font-family: 'Kumbh Sans', sans-serif;
          padding: 0;
          margin: 0;
        }
        a {
          text-decoration: none;
        }
        .pf-header {
          position: sticky;
          top: 0;
          background-color: #f0f0f0;
          z-index: 10;
        }
        .pf-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 2rem;
        }
        .pf-nav-left {
          font-weight: 600;
          font-size: 1.5rem;
          color: #000;
        }
        .pf-nav-right {
          display: flex;
          list-style: none;
          gap: 1rem;
        }
        .pf-nav-right li a {
          color: #000;
        }
        .pf-about-section {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 4rem 2rem;
        }
        .pf-about-left h1 {
          font-size: 2rem;
        }
        .pf-highlight {
          color: #b388eb;
        }
        .pf-about-buttons {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
        }
        .pf-btn {
          padding: 0.5rem 1rem;
          background-color: #4e4cb8;
          color: #fff;
          border-radius: 5px;
        }
        .pf-about-right img {
          width: 200px;
          border-radius: 50%;
        }
        .pf-skills-section {
          padding: 3rem 2rem;
        }
        .pf-skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }
        .pf-skill-card {
          background-color: #2c2a50;
          padding: 1rem;
          width: 200px;
          border-radius: 8px;
          text-align: center;
        }
        .pf-skill-img {
          width: 80px;
          margin-bottom: 0.5rem;
        }
        .pf-projects-section {
          padding: 3rem 2rem;
        }
        .pf-project-card {
          background-color: #2c2a50;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 2rem;
          text-align: center;
        }
        .pf-project-card img {
          width: 100%;
          border-radius: 8px;
        }
        .pf-project-details {
          display: none;
          color: #ccc;
          margin-top: 1rem;
          text-align: left;
        }
        .portfolio-toggle-btn {
          margin-top: 1rem;
          padding: 0.3rem 0.5rem;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .pf-contact-section {
          padding: 3rem 2rem;
          max-width: 600px;
          margin: auto;
        }
        .pf-contact-form input,
        .pf-contact-form textarea {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.5rem;
          border-radius: 5px;
          border: none;
        }
        .pf-contact-form button {
          background-color: #007bff;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
        }
        .pf-footer {
          background-color: #0d0c1d;
          color: white;
          padding: 2rem;
          text-align: center;
        }
        .pf-footer-socials a {
          margin: 0 0.5rem;
          color: white;
          font-size: 1.5rem;
        }
      `}</style>
    </main>
  );
}
