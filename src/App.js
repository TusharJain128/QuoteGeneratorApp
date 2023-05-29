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

  return (<div className="container text-center">
    <h1>Quotes</h1>
    <div>
      {!isChange &&
        <button onClick={() => setIsChange(true)}>START</button>
      }
    </div>
    <div>
      {
        isChange &&
        <>
          <div className="container d-flex justify-content-center">
            <div className="card" style={{ width: "40rem" }}>
              <div className="card-body">
                <h5 className="card-title">{text.author}</h5>
                <div className="container" style={{height:"10rem"}}>
                  <p className="border rounded" style={{height:"10rem"}}>{text.quote}</p>
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