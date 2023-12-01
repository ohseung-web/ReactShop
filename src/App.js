import { useState } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      {/* <Button variant="primary">Primary</Button> */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Board</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {/* <Card shoes={shoes[0]} i={1}></Card>
          <Card shoes={shoes[1]} i={2}></Card>
          <Card shoes={shoes[2]} i={3}></Card> */}
          {shoes.map((a, i) => {
            // i는 index값으로 0부터 시작하므로 +1
            return <Card shoes={shoes[i]} i={i + 1}></Card>;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img
        src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
