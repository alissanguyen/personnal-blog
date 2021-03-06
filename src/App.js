import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="top-nav">
        <div className="top-top-nav">
          <button className="button" id="home">Home</button>
          <button className="button" id ="about-me">About Me</button>
          <button className="button" id="my-journey">My Journey</button>
          <button className="button" id="github-spotter">GitHub Spotter</button>
          <button className="button" id="aufgaben">Aufgaben</button>
          <button className="button" id="github-profile">My GitHub</button>
          <button className="button" id="contact">Contact</button>
        </div>
        <div className="header-background">
          <header className="welcome">Hi, welcome to my blog :)</header>
        </div>
      </div>
      <div className="blog-content">
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      <ul className="individual-blog"></ul>
      </div>
    </div>
  );
}


export default App;
