import React from "react";
import VideoRecorder from "../../Components/VideoRecoder";
import AudioRecorder from "../../Components/AudioRecorder";
import style from "./style.module.css";

const Index:React.FC = () => {
    return (
        <div className={style.interview}>
            <VideoRecorder />
            <AudioRecorder />
        </div>
    );
};

export default Index;
