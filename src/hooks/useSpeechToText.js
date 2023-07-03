import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useSpeechToText = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const toggleListening = event => {
    event.preventDefault();
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
    }
  }

  return { transcript, listening, resetTranscript ,toggleListening };
};

export default useSpeechToText;
