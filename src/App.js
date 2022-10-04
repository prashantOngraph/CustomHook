import React, { useState } from "react";

const useCustom = () => {
  const [value, setValue] = useState({ current: "", previous: "" });

  function handleChange(val) {
    setValue({ current: val, previous: value.current });
  }
  return [value, handleChange];
};

function App() {
  const [value, handleChange] = useCustom();

  return (
    <div>
      <h1>Type below input box</h1>
      <input
        type="text"
        style={{ minWidth: "50vw" }}
        placeholder="Enter Text "
        onChange={(e) => handleChange(e.target.value)}
      />

      <fieldset style={{ marginTop: "1rem" }}>
        <p>
          <b>previous value:</b>
          {value?.previous}
        </p>
        <p>
          <b>current value:</b>
          {value?.current}
        </p>
      </fieldset>
    </div>
  );
}

export default App;
