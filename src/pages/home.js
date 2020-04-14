import React from 'react';
import Hero from "../components/hero";
import Banner from "../components/banner"
import { Link } from "react-router-dom";
import WhyMe from "../components/whyme"
import About from '../pages/about';
import Contact from "../pages/contact";
import Weather from "../pages/weather";

export default function Home () {
    return (
    <>
    <Hero>
        <Banner title= "Welcome" subtitle = "My name is Philip, and this is my portfolio">
            <Link to = "/projects" className="btn-primary">
                Projects
            </Link>
        </Banner>
    </Hero>
    <WhyMe />
    <About />
    <Contact />
    <Weather />
    </>
    );
}



