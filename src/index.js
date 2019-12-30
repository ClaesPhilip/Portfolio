import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import "./index.css";

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact={true} path="/" component={Home} />
            <Route exaxt path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </div>
    </div>
);

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);