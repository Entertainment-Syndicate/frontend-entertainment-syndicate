import React, { Component } from 'react';
import {
  Card,
  Button,
  CardGroup,
  CardColumns,
  Modal,
  CardDeck,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export class Game extends Component {
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
      <div className="card-div">
        {this.props.showAnime && this.props.showMovie && this.props.showGame ? (
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={true}
            className=""
            containerClass="container-with-dots"
            customTransition="all 1s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
            transitionDuration={300}
          >
            {this.props.gameData.map((item2) => {
              // console.log('hello Anime');
              return item2.map((item, idx) => {
                return (
                  <CardGroup className="card-group" key={idx}>
                    <Card
                      className="card-carousel"
                      onClick={() => this.showModal(item)}
                    >
                      <Card.Img variant="top" src={item.image} />

                      <Card.Body>
                        <Card.Title> {item.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                );
              });
            })}
          </Carousel>
        ) : (
          <div>
            <CardDeck>
              {this.props.gameData.map((item2) => {
                // console.log('hello Anime');
                return item2.map((item, idx) => {
                  return (
                    <CardGroup className="card-group" key={idx}>
                      <Card
                        className="card-card"
                        onClick={() => this.showModal(item)}
                      >
                        <Card.Img variant="top" src={item.image} />

                        <Card.Body>
                          <Card.Title> {item.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  );
                });
              })}
            </CardDeck>
          </div>
        )}

        <Modal show={this.state.displayModal} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.item.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.state.item.image}
              alt={this.state.item.title}
              width="465"
            ></img>
            <br></br>
            <p>Description: {this.state.item.description}</p>

            <p>Date: {this.state.item.date}</p>

            <p>Type: {this.state.item.type}</p>

            <p>Category: {this.state.item.category}</p>

            <p>Platform: {this.state.item.platform}</p>

            <p>
              Publisher & Developer: {this.state.item.publisher} ,
              {this.state.item.developer}
            </p>

            <a href={this.state.item.installingURL}>Install from Here</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.props.addToFavoriteHandler(this.state.item);
                this.setState({
                  displayModal: false,
                });
              }}
            >
              Add to Favorite
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Game;
