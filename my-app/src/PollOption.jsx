
import React from "react";

const PollOption = ({ label, count, onVote }) => {
  return (
    <div style={styles.option}>
      <h3>{label}</h3>
      <p>Votes: {count}</p>
      <button onClick={onVote} style={styles.button}>Vote</button>
    </div>
  );
};

const styles = {
  option: {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "20px",
    width: "150px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(216, 39, 186, 0.73)",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
};

export default PollOption;
