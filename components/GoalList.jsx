import React from "react";
import { Card } from "react-bootstrap";

function GoalList({ goals }) {
  return (
    <div className="goals-list">
      {goals.map((goal, index) => (
        <Card key={index} className="mb-3 goal-card">
          <Card.Body>
            <Card.Title>{goal.name}</Card.Title>
            <Card.Text>{goal.description}</Card.Text>
            <Card.Text className="text-muted">
              Due Date: {goal.date || "Not set"}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default GoalList;
