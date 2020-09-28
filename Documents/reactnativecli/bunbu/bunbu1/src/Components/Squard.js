import React from 'react'

export default function Squard({ black, children }) {
    const fill = black == true ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'
    return (
        <div style={{ backgroundColor: fill, height: '175px', width: '175px' }}>
            {children}
        </div>
    )
}

