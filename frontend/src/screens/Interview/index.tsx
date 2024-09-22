import React from "react";
// import VideoRecorder from "../../Components/VideoRecoder";
// import AudioRecorder from "../../Components/AudioRecorder";
import CallButtons from "../../Components/CallButtons";
import Avatar from "../../Components/Avatar";
import style from "./style.module.css";

const Index: React.FC = () => {
  return (
    <div className={style.interview}>
      {/* <VideoRecorder />
            <AudioRecorder /> */}
      <div className={style.avatar}>
        <Avatar />
      </div>
      <div className={style.call_btn}>
        <CallButtons />
      </div>
    </div>
  );
};

export default Index;
