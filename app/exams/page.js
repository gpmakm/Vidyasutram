"use client";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import "./globals2.css";

export default function Home() {
  const dummyqr = "https://www.vidyasutram.site/";
  const [level, setlevel] = useState("");
  const [price, setprice] = useState(0);
  const [url, seturl] = useState(dummyqr);

  const pricesetup = () => {
    if (level === "easy") setprice(5);
    else if (level === "medium") setprice(10);
    else if (level === "hard") setprice(20);
    else alert("Select a level first");
  };

  // update real UPI URL only when price changes
  useEffect(() => {
    if (price > 0) {
      const realurl = `upi://pay?pa=9334668262@ybl&pn=Akarsh&am=${price}&cu=INR&tn=Payment%20for%20quiz`;
      seturl(realurl);
    }
  }, [price]); // triggered only when price changes

  return (
    <>
      <div id="choose">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Choose your difficulty level</h2>

          <div>
            <label htmlFor="easy">Easy</label>
            <input
              type="radio"
              name="level"
              id="easy"
              value="easy"
              onChange={(e) => setlevel(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="medium">Medium</label>
            <input
              type="radio"
              name="level"
              id="medium"
              value="medium"
              onChange={(e) => setlevel(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="hard">Hard</label>
            <input
              type="radio"
              name="level"
              id="hard"
              value="hard"
              onChange={(e) => setlevel(e.target.value)}
            />
          </div>

          <button type="button" onClick={pricesetup}>
            Proceed
          </button>
          <div>
            <label htmlFor="name">Name</label>
            
          </div>
        </form>
        <div id="qrCode">
          <QRCode value={url} size={190} />
        </div>
      </div>


    </>
  );
}
