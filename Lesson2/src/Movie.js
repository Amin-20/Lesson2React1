import React from "react";

export default function Movie({ movieInfo }) {
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
          background: "deepskyblue",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            style={{
              width: "250px",
              margin: "10px",
              display: "inline-block",
            }}
            src={movieInfo.img}
            alt="image"
          ></img>
          <h2
            style={{
              marginLeft: "10px",
              marginBottom: "30px",
            }}
          >
            <p >Name : {movieInfo.name}</p>
            <p>Genre : {movieInfo.genre}</p>
            <p>Director : {movieInfo.director}</p>
            <p>Imdp : {movieInfo.imdb}</p>
            <p>Description : {movieInfo.description}</p>
          </h2>
        </div>
      </div>
    </div>
  );
}
