import React from "react";
import Raiting from "./Raiting";

export default function Movie({ movieInfo }) {
  const style = {
    color: "black",
  };

  const style1 = {
    width: "70%",
    margin: "10px",
    height: "50%",
    color: "white",
    textAlign: "center",
    border: "2px solid gray",
    display: "inline-block",
    background: "#EBBDB4 ",
    borderRadius: "10px"
  };

  const imgStyle = {
    width: "250px",
    margin: "10px",
    display: "inline-block",
    borderRadius: "10px"
  };

  return (
    <div>
      <div style={style1}>
        <div style={{ display: "flex" }}>
          <img style={imgStyle} src={movieInfo.img} alt="movieImg"></img>
          <h2 style={{ marginLeft: "10px", marginBottom: "30px" }}>
            <p style={style}>Name : {movieInfo.name}</p>
            <p style={style}>Genre : {movieInfo.genre}</p>
            <p style={style}>Director : {movieInfo.director}</p>
            <Raiting raiting={movieInfo.imdb}></Raiting>
            <p style={style}>Description : {movieInfo.description}</p>
          </h2>
        </div>
      </div>
    </div>
  );
}
