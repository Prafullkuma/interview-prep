import React, { useRef, useState } from "react";
import "./style.css";

const Otp = ({ length = 4 }) => {
  const [opt, setOtp] = useState(() => Array(length).fill(""));
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    // allow only single digit

    if (value.match(/^\d$/)) {
      const newOtp = [...opt];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < length - 1) {
        inputRef.current[index + 1]?.focus();
      }
    }

    // Move focus to previous input on backspace

    if (value === "" && index >= 0) {
      const newOTP = [...opt];
      newOTP.splice(index, 1, "");
      setOtp(newOTP);
      inputRef.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    const { value } = e.target;
    if (value && e.key !== "Backspace") {
      inputRef.current[index + 1]?.focus();
    }
    if (e.key === "Backspace" && opt[index] === "") {
      if (index > 0) {
        inputRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="container">
      <div>
        <h1> OTP </h1>
        {opt.map((_, idx) => {
          return (
            <input
              key={idx}
              type="text"
              maxLength={1}
              className="input"
              value={opt[idx]}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => (inputRef.current[idx] = el)}
              onChange={(e) => handleChange(e, idx)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Otp;
