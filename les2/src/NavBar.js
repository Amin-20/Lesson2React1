import React from "react";

export default function NavBar  ({cinemaInfo}) {

    return (
      <div style={{
        width:"60%",
        height:"auto",
        backgroundColor:"blue",
        marginLeft:"20%",
      
        padding:"0px  0px 10px 0px"
      }}>
        <section style={{
                 display: "inline-block",
                 textAlign: "center",
                 marginLeft: "300px",
                 height: "70px",
        }}>

            <h1 style={{
                display:"inline-block",
                marginLeft:"-300px",
                fontSize:"30px",
                fontWeight:"bolder",
                color:"white"
            }}>
                    Welcome to {cinemaInfo.name}
                    <br></br>
                    Adress of {cinemaInfo.name}: {cinemaInfo.address}
                    <br></br>
                     Rating: {cinemaInfo.rating}
            </h1>

        </section>

      </div>
    )
  
}
