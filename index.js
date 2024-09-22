import React, { useState } from "react";

function SmallInput() {
  // Define state for input value
  const [inputValue, setInputValue] = useState("");

  // Handle change in input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          width: "150px",
          padding: "5px",
          fontSize: "14px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <p>Typed Value: {inputValue}</p>
    </div>
  );
}

export default SmallInput;
