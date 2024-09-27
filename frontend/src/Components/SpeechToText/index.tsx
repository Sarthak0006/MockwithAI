// src/SpeechRecognitionComponent.tsx

import React, { useState } from 'react';
import SpeechToText from '../../controllers/speechtotext';

const SpeechRecognitionComponent: React.FC = () => {
    const [transcript, setTranscript] = useState<string>('');
    const [speechToText, setSpeechToText] = useState<SpeechToText | null>(null);

    const handleFinalised = (finalText: string) => {
        setTranscript(finalText);
    };

    const handleEndEvent = () => {
        console.log('Speech recognition has ended.');
    };

    const handleInterimResult = (interimText: string) => {
        setTranscript(interimText);
    };

    // Initialize the SpeechToText instance only once
    if (!speechToText) {
        const stt = new SpeechToText(handleFinalised, handleEndEvent, handleInterimResult);
        setSpeechToText(stt);
    }

    return (
        <div>
            <h1>Speech Recognition</h1>
            <button onClick={() => speechToText?.startListening()}>Start Listening</button>
            <button onClick={() => speechToText?.stopListening()}>Stop Listening</button>
            <p>{transcript}</p>
        </div>
    );
};

export default SpeechRecognitionComponent;