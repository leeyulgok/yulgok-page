import { useState, useEffect, useRef } from "react";

const useCheckValidation = (type, value) => {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false); // 추가된 코드
  const timer = useRef(null);

  useEffect(() => {
    if (!isTouched) return;

    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      console.log(`Checking validation for type: ${type} and value: ${value}`); // 이 줄을 추가

      let errorMessage = "";
      let regex;
      switch (type) {
        case "name":
          regex = /^[a-zA-Z가-힣]{2,30}$/;
          errorMessage = "최대 30자, 특수문자, 숫자는 불가";
          break;
        case "phone":
          regex = /^010\d{8}$/;
          errorMessage = "숫자만 가능, 010으로 시작해야 합니다";
          break;
        case "email":
          regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          errorMessage = "이메일 형식이어야 합니다";
          break;
        default:
          regex = /.*/;
      }

      const checkValidity = regex.test(value);
      console.log(`Validity result: ${checkValidity}`); // 이 줄을 추가
      setIsValid(checkValidity);
      if (!checkValidity) {
        setError(`입력값이 잘못됐습니다. 확인해주세요. ${errorMessage}`);
      } else {
        setError("");
      }
    }, 1000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [type, value, isTouched]);

  const touchHandler = () => {
    setIsTouched(true); // 추가된 코드
  };

  return { isValid, error, touchHandler }; // 수정된 코드
};

export default useCheckValidation;
