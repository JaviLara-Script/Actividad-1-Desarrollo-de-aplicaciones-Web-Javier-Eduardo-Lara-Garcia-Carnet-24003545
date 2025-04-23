import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function GoalForm({ addGoal }) {
  const [goal, setGoal] = useState({ name: "", description: "", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal({ ...goal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.name) {
      addGoal(goal);
      setGoal({ name: "", description: "", date: "" });
    }
  };

  return (
    <Card className="p-3 mb-3 form-card">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={goal.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={goal.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={goal.date}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">
          ADD GOAL
        </Button>
      </Form>
    </Card>
  );
}

export default GoalForm;
