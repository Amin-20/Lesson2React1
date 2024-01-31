import React from 'react'

export default function Feedback({feedback}) {
  return (
    <div>
      <div>
        <div>
          <div
          
            style={{
              display: "inline-block",
            }}
          >
          </div>
          <div
            style={{
              display: "inline-block",
              width: "80%",
              background: "green",
                color:"white",
              marginLeft: "5px",
              marginBottom: "10px",
            }}
          >
            <h1
              style={{
                marginTop: "0px",
              }}
            >
             User :  {feedback.username}
            </h1>
            Feedback : <h3>{feedback.content}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
