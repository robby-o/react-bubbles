import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const NewColorForm = ({ updateColors }) => {
  const [color, setColor] = useState(initialColor);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/colors", color)
      .then(res => {
        updateColors(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>add color</legend>
      <label>
        color name:
        <input
          id="color"
          type="text"
          placeholder="color name..."
          name="color"
          value={color.color}
          onChange={e => setColor({ ...color, color: e.target.value })}
        />
      </label>
      <label>
        hex code:
        <input
          id="code"
          type="text"
          placeholder="hex code..."
          name="code"
          value={color.code.hex}
          onChange={e =>
            setColor({
              ...color,
              code: { hex: e.target.value }
            })
          }
        />
      </label>
      <div className="button-row">
        <button type="submit" value="submit color">
          Submit Color
        </button>
      </div>
    </form>
  );
};

export default NewColorForm;
