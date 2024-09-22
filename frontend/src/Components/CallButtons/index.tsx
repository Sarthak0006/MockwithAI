import React from "react";
import style from "./style.module.css";
import video from "../../assets/video.svg";
import mic from "../../assets/mic.svg";
import moreVertical from "../../assets/more-vertical.svg";
import callOff from '../../assets/phone-off.svg'

const Index: React.FC = () => {
    return (
        <div className={style.button_container}>
            <button className={style.button}><img src={mic} alt="mic" /></button>
            <button className={style.button}><img src={video} alt="video" /></button>
            <button className={style.button}><img src={callOff} alt="callOff" /></button>
            <button className={style.button}><img src={moreVertical} alt="more-vertical" /></button>
        </div>
    );
};

export default Index;