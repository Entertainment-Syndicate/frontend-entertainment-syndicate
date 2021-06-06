import React, { Component } from 'react';
import { Card, Button, CardGroup, CardColumns, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Anime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      item: {},
    };
  }

  showModal = (item) => {
    this.setState({
      displayModal: true,
      item: item,
    });
  };
  hideModal = () => {
    this.setState({
      displayModal: false,
    });
  };
  render() {
    return (
      <div>
        <CardColumns>
          {this.props.animeData.map((item2) => {
            console.log('hello Anime');
            return item2.map((item, idx) => {
              return (
                <CardGroup key={idx} style={{ width: '18rem' }}>
                  <Card onClick={() => this.showModal(item)}>
                    <Card.Img variant="top" src={item.image} />

                    <Card.Body>
                      <Card.Title> {item.title}</Card.Title>
                      
                    </Card.Body>
                  </Card>
                </CardGroup>
              );
            });
          })}
        </CardColumns>

        <Modal show={this.state.displayModal} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.item.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.item.image} alt={this.state.item.title}></img>
            <br></br>
            <p>Description: {this.state.item.description}</p>

            <p>Date: {this.state.item.date}</p>

            <p>Type: {this.state.item.type}</p>

            <p>Category: {this.state.item.category}</p>

            <p>Episodes: {this.state.item.episodes}</p>

            <p>
              Score & Rating: {this.state.item.score} ,{this.state.item.rate}
            </p>

            <a href={this.state.item.watchURL}>Watch Here</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            <Button variant="primary">Add to Favorite</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Anime;
