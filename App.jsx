import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">Flup</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#">Tasks</Nav.Link>
              <Nav.Link href="#">Goals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="main-container">
        <Row>
          <Col md={4}>
            <GoalForm addGoal={addGoal} />
          </Col>
          <Col md={8}>
            <GoalList goals={goals} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
