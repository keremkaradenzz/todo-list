import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <TodoList />
        </Col>
      </Row>

    </Container>
  )
}

export default App;