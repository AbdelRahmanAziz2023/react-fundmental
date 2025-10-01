import React from "react";
import "./header.css";
import logo from "../../assets/react.svg"


export default function Header() {
    let subHeadLine=[
        "React is a JavaScript library for building user interfaces.",
        "It was developed by Facebook (Meta).",
        "Its main focus is on building component-based, declarative, and efficient UIs.",
    ]
  return (
    <section className="header">
      <img id="logo" src={logo} alt="logo" />
      <h1 className="headline">React Fundmentals</h1>
      <ul>
        {subHeadLine.map((item,index)=>{
        return <li key={index} className="subheadline">{item}</li>
      })}
      </ul>
      
    </section>
  );
}
