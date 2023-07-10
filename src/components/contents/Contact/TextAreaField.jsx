import { useEffect } from "react";

import useSpeechRecognition from "../../../hooks/useSpeechToText";

import Microphone from "../../UI/Microphone";
import NoMicrophone from "../../UI/NoMicrophone";

import classes from "./TextAreaField.module.css";

function TextAreaField({ label, name, updateValidation }) {
  const { transcript, listening, resetTranscript, toggleListening } =
    useSpeechRecognition();

  useEffect(() => {
    updateValidation(name, transcript !== "");
  }, [transcript, updateValidation, name]);

  return (
    <div className={classes.contents}>
      <div className={classes.row}>
        <label>{label}</label>
        <div>
          <div onClick={toggleListening}>
            {listening ? (
              <Microphone listening={listening} />
            ) : (
              <NoMicrophone />
            )}
          </div>
          <div className={classes.reset} onClick={resetTranscript}>
            리셋
          </div>
        </div>
      </div>
      <textarea
        name={name}
        className="transcript"
        value={transcript}
        onChange={() => {}}
        placeholder="음성 메시지를 등록해주세요."
        required
      />
    </div>
  );
}

export default TextAreaField;
