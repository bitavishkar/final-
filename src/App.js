import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import ImageUpload from "./components/ImageUpload";
import "./index.css";

// import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Deblurring One At A time </p>
        <h2>Bringing Clearity to life </h2>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section"></section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <ImageUpload></ImageUpload>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      {/* <Route path="/about">
        <About />
      </Route> */}

      <Route path="/service">
        <Service>
          <ImageUpload></ImageUpload>
        </Service>
      </Route>

      <Route>
        <Navbar></Navbar>
        <Login></Login>
      </Route>
    </Switch>
  );
};

export default App;
