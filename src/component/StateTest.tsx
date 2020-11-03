import React from 'react'
import { useState } from 'react'

function getRamDomColor() {
    const colorList = ['deeppink' ,'green' ,'blue' ,'yellow','red'];
    const randomIndex = Math.trunc(Math.random() *5);
    return colorList[randomIndex];
}

export default function StateTest() {
    const [color, setcolor] = useState('deepink');
    function handleBoxClick() {
        const newColor = getRamDomColor();
        setcolor(newColor);
    }

    return (
        <div className="color-boox" 
        style={{backgroundColor : color}}
        onClick={handleBoxClick}>
            Color box
            
        </div>
    )
}
