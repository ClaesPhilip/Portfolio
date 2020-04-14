import React from 'react'

export default function heroAbout({ children, heroAbout }) {
    return <header className={heroAbout}>{children}</header>;
}

heroAbout.defaultProps = {
    heroAbout: "heroAbout"
};