// src/SpeechToText.ts

class SpeechToText {
    private recognition: SpeechRecognition;
    private finalTranscript: string = '';
    private isListening: boolean = false;

    constructor(
        onFinalised: (transcription: string) => void,
        onEndEvent: () => void,
        onAnythingSaid?: (interimTranscript: string) => void,
        language: string = 'en-US'
    ) {
        if (!('webkitSpeechRecognition' in window)) {
            throw new Error("This browser doesn't support speech recognition. Try Google Chrome.");
        }

        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.interimResults = !!onAnythingSaid;
        this.recognition.lang = language;

        // Handle results
        this.recognition.onresult = (event: SpeechRecognitionEvent) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcriptionPiece = event.results[i][0].transcript;

                if (event.results[i].isFinal) {
                    this.finalTranscript += transcriptionPiece;
                    onFinalised(this.finalTranscript);
                    this.finalTranscript = ''; // Reset for the next segment
                } else if (this.recognition.interimResults) {
                    interimTranscript += transcriptionPiece;
                    if (onAnythingSaid) {
                        onAnythingSaid(interimTranscript);
                    }
                }
            }
        };

        this.recognition.onend = () => {
            onEndEvent();
            if (this.isListening) {
                console.log('Restarting recognition...');
                this.startListening(); // Restart listening automatically
            }
        };
    }

    public startListening() {
        this.isListening = true; // Set listening state
        this.recognition.start();
    }

    public stopListening() {
        this.isListening = false; // Clear listening state
        this.recognition.stop();
    }
}

export default SpeechToText;
