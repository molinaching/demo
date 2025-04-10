
import React, { useState } from "react";
import PollOption from "./PollOption";

const App = () => {
  const [votes, setVotes] = useState([
    { option: "Dog", count: 0 },
    { option: "Cat", count: 0 },
    { option: "Rat", count: 0 },
  ]);

  const handleVote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index].count += 1;
    setVotes(updatedVotes);
  };

  const getLeader = () => {
    const maxVotes = Math.max(...votes.map((v) => v.count));
    const leaders = votes.filter((v) => v.count === maxVotes);

    if (maxVotes === 0) return "No votes yet.";
    if (leaders.length === 1) {
      return `${leaders[0].option} is winning with ${leaders[0].count} votes.`;
    }
    return `It's a tie between ${leaders.map((l) => l.option).join(" & ")} with ${leaders[0].count} votes each.`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🐾 Vote for the Best Pet!</h1>
      <div style={styles.pollContainer}>
        {votes.map((vote, index) => (
          <PollOption
            key={index}
            label={vote.option}
            count={vote.count}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>
      <h2 style={styles.leader}>🏆 {getLeader()}</h2>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
  },
  pollContainer: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "40px",
  },
  leader: {
    fontSize: "24px",
    color: "#333",
  },
};

export default App;
