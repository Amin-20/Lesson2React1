import React from 'react'

export default function Movie(movieInfo) {
  return (
    <div>
      <div style={{
          width: "50%",
          margin: "10px",
          height:"50%",
        color:"white",
          textAlign: "center",
          border: "2px solid gray",
          display: "inline-block",
          background: "deepskyblue",
          borderRadius: "10px",
      }}>
        <div style={{
            display:"flex"
            }}>
                <img style={{
                    width:"100px",
                    height:"100px",
                    margin:"10px",
                    display:"inline-block"
                }} src={movieInfo.src} alt="image"></img>
            <h2
                style={{
                marginLeft: "10px",
                marginBottom: "30px",
                }}
            >
                Name : {movieInfo.name}
                <br></br>
                Genre : {movieInfo.genre}
                <br></br>
                Director : {movieInfo.director}
                <br></br>
                Imdp : {movieInfo.imdb}
                <br></br>
                Description : {movieInfo.description}

          </h2>
          
                

        </div>

      </div>
    </div>
  )
}
