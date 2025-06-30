import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <FaSpinner style={styles.spinner} />
        <div style={styles.text}>{message}</div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(255, 255, 255, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  spinner: {
    fontSize: "60px",
    color: "#3498db",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "20px",
    fontSize: "20px",
    color: "#333",
  },
};

export default Loader;
