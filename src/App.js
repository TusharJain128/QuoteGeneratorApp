import React, { useEffect, useState } from "react";
import quotes from './quotes.json'
const data = quotes.quotes


export default function App() {
  const [isChange, setIsChange] = useState(false)
  const [text, setText] = useState("")

  function changeQuote() {
    setText(data[Math.floor(Math.random() * 102)])
  }

  useEffect(() => {
    changeQuote()
  }, [isChange])

  return (
    <div className="container text-center">
      <h1 style={{color: "rgb(255 239 232)"}}>Quotes</h1>
      <div>
        {!isChange &&
          <button className="btn btn-success m-3" onClick={() => setIsChange(true)}>START</button>
        }
      </div>
      <div>
        {
          isChange &&
          <>
            <div className="container  d-flex justify-content-center">
              <div className="card quote" style={{ width: "30rem", background: "linear-gradient(135deg, #71b7e6, #9b59b6)", boxShadow: "5px 10px 8px #888888" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "rgb(14, 14, 187)" }}>{text.author}</h5>
                  <div className="container d-flex justify-content-center align-items-center" style={{ height: "10rem" }}>
                    <h6 className="" >{text.quote}</h6>
                  </div>
                  <button className="btn btn-success m-3" onClick={changeQuote}>Change</button>
                  <button className="btn btn-danger m-3" onClick={() => setIsChange(false)}>Exit</button>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}