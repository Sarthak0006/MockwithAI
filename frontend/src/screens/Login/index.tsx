import React, { useEffect, useRef } from "react";
import style from "./style.module.css";

const Index: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Adjust playback speed (1.0 is normal speed)
    }
  }, []);
  return (
    <div className={style.login_container}>
      <div className={style.login}>
        <h1>Welcome Back</h1>
        <input type="text" placeholder="Email Address*" />
        <button className={style.continue}>Continue</button>
        <div className={style.signup}>
          <h5>Don't have an account?</h5>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Index;
