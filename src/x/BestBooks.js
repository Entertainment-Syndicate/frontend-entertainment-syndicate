import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class BestBooks extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.books.map((item, index) => {
            return (
              <Col sm={6} lg={4} key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.bookName}</Card.Title>
                    <Card.Text>{item.describtion}</Card.Text>
                    <Button
                      onClick={() => this.props.deleteBook(index)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => {
                        this.props.updateBook(
                          index,
                          item.bookName,
                          item.describtion,
                          item.image
                        );
                        this.props.handleShowUpdate();
                      }}
                      variant="primary"
                    >
                      Update
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default BestBooks;
