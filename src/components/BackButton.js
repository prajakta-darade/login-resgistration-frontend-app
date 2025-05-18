import React from "react";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        padding: "8px 16px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#444",
        color: "#fff",
        cursor: "pointer",
        margin: "10px"
      }}
    >
      ⬅ Back
    </button>
  );
};

export default BackButton;
