import React from "react";

export default function Movie({ movieInfo }) {

  const style={
    color:"black"


  }

  return (
    <div>
      <div
        style={{
          width: "50%",
          margin: "10px",
          height: "50%",
          color: "white",
          textAlign: "center",
          border: "2px solid gray",
          display: "inline-block",
          background: "#EBBDB4 ",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "250px", margin: "10px", display: "inline-block" }}
            src={movieInfo.img}
            alt="image"></img>
          <h2 style={{ marginLeft: "10px", marginBottom: "30px" }}>
            <p style={style}>Name : {movieInfo.name}</p>
            <p style={style}>Genre : {movieInfo.genre}</p>
            <p style={style}>Director : {movieInfo.director}</p>
            <p style={style}>Imdp : {movieInfo.imdb}</p>
            <p style={style}>Description : {movieInfo.description}</p>
          </h2>
        </div>
      </div>
    </div>
  );
}
