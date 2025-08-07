import { useState } from "react";

export default function InputField({ id, labelText, type }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputValueChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        onChange={handleInputValueChange}
        value={inputValue}
        className="border-[1px]"
      ></input>
    </>
  );
}
