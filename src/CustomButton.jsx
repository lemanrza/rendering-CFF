import React, { useState } from 'react'

const CustomButton = (props) => {
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)
    const clickBtn = () => {
        setClicked(true)
    }
    const hoverBtn = () => {
        setHovered(true);
    };

    const leaveBtn = () => {
        setHovered(false);
    };
    return (
        <div className='max-w-lg mx-auto mt-10 p-4'>
            <button
                onClick={clickBtn}
                className={`${clicked && "bg-red-200"} w-full text-lg px-6 py-3 rounded-lg border-2  bg-blue-300 text-white font-semibold`}>
                {props.text}
            </button>

            <p className={`${clicked ? "block" : "hidden"} mt-4 text-center text-red-600 font-semibold text-xl`}>
                Warn Message
            </p>

            <button
                onMouseEnter={hoverBtn}
                onMouseLeave={leaveBtn}
                className={`w-full text-lg mt-6 px-6 py-3 rounded-lg border-2 border-green-400 bg-green-300 hover:bg-green-400 text-white font-semibold transition `}>
                {props.text}
            </button>

            <p className={`${hovered ? "block" : "hidden"} mt-4 text-center text-blue-400 font-semibold text-xl`}>
                Hint
            </p>
        </div>
    )
}

export default CustomButton