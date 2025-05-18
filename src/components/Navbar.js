import React from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4343/logout", {}, { withCredentials: true });
      navigate("/");
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <nav style={{
      backgroundColor: "#007bff",
      padding: "10px 20px",
      color: "whitesmoke",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <Link to="/dashboard" style={{ color: "white", textDecoration: "none", fontWeight: "bolder", fontSize: "20px" }}>
          MyApp
        </Link>
      </div>
      <div>
        <button onClick={handleLogout} style={{
          backgroundColor: "transparent",
          border: "1px solid white",
          color: "white",
          padding: "6px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
