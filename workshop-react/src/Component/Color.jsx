import React, { useState } from "react";

function ColorBox() {
  const [bgColor, setBgColor] = useState("#FF0000"); // Rouge au départ

  const changeColor = () => {
    setBgColor(bgColor === "#FF0000" ? "#00FF00" : "#FF0000"); // Rouge → Vert et inversement
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: bgColor,
          margin: "10px auto",
          borderRadius: "10px",
          border: "2px solid #000",
          transition: "0.5s ease-in-out", // Ajoute une transition fluide
        }}
      ></div>
      <button onClick={changeColor} style={{ padding: "10px 15px", cursor: "pointer" }}>
        Changer de couleur
      </button>
    </div>
  );
}

export default ColorBox;