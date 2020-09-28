import React from 'react'
import Knite from './Knite'
import Squard from './Squard'


function renderSquare(i, [knightX, knightY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knite /> : null


    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <Squard black={black}>{piece}</Squard>
        </div>
    )
}
export default function HomePage({ knightPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {squares}
        </div>
    )
}


