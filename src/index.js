import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/nav.js";
// PAGES
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Weather from "./pages/weather";

import "./index.css";



const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact={true} path="/" component={Home} />
            <Route exaxt path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/weather" component={Weather} />
        </div>
    </div>
);

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);