import React, { Component } from 'react'
import Title from "./Title";
import { FaColumns, FaMicrophone, FaUser, FaFileAlt } from "react-icons/fa";

export default class whyme extends Component {

    state = {
        whyMe: [
            {
                icons: <FaUser />,
                title: "ME",
                info: "My name is Philip, im a Frontend developer student from Sweden.",
            },
            {
                icons: <FaFileAlt />,
                title: "Education",
                info: "KYH Yrkeshögskola",
            },
            {
                icons: <FaColumns />,
                title: "Programming skills",
                info: "Html, Css, JavaScript, React.Js, Gatsby.Js, Node.Js, TailwindCss, Styled-Components"
            },
            {
                icons: <FaMicrophone />,
                title: "Music",
                info: "I've a degree in music production and audio engineering"
            },
        ]
    }

    render() {
        return (
            <section className="whyMe">
                <Title title="whyMe?" />
                <div className="whyMe-center">
                    {this.state.whyMe.map((item, index) => {
                        return <article key={index} className="whyMe">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section >
        );
    }
}
