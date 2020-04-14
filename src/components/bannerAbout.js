import React from 'react'

export default function bannerAbout({ children, title, subtitle }) {
    return (
        <div className="bannerAbout">
            <h1> {title}</h1>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}