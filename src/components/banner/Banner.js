import React from 'react'
import style from "./Banner.module.scss"
import eye from "../../essets/👀.svg"
function Banner() {
    return (
        <div className={style.banner}>
            <h1>Banner</h1>
            <button className='btns'><span>button</span> <img src={eye} alt="" /></button>
        </div>
    )
}

export default Banner