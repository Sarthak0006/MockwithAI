import React, { useState, useRef, useEffect } from 'react';

interface VideoRecorderProps {}

const VideoRecorder: React.FC<VideoRecorderProps> = () => {
  const [permission, setPermission] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recording, setRecording] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const getCameraPermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData: MediaStream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err: any) {
        alert(err.message);
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.');
    }
  };

  const startRecording = async () => {
    if (stream) {
      const mediaRecorder = new MediaRecorder(stream);
      const recordedChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        recordedChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
        const recordedVideoUrl = URL.createObjectURL(recordedBlob);
        // Do something with the recorded video (e.g., upload to server or download)
        console.log(recordedVideoUrl);
      };

      mediaRecorder.start();
      setRecording(true);

      // Stop recording after 10 seconds (example)
      setTimeout(() => {
        mediaRecorder.stop();
        setRecording(false);
      }, 10000);
    }
  };

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div>
      <h2>Video Recorder</h2>
      <main>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          width="640"
          height="480"
          style={{
            transform: 'scaleX(-1)',
            display: permission ? 'block' : 'none',
          }}
        />
        <div className="video-controls">
          {!permission ? (
            <button onClick={getCameraPermission} type="button">
              Get Camera
            </button>
          ) : null}
          {permission && !recording ? (
            <button onClick={startRecording} type="button">
              Record
            </button>
          ) : null}
          {permission && recording ? (
            <button type="button" disabled>
              Recording...
            </button>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default VideoRecorder;