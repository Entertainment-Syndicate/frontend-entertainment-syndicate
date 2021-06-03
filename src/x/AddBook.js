import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class AddBook extends Component {
  state = {
    bookName: '',
    describtion: '',
    imageUrl: '',
  };

  AddBooksHandler = async () => {
    const formData = {
      bookName: this.state.bookName,
      describtion: this.state.describtion,
      image: this.state.imageUrl,
      email: this.props.email,
    };
    const updatedData = await axios.post(
      process.env.REACT_APP_SERVER,
      formData
    );
    this.props.getNewBookData(updatedData.data);
  };

  addBookName = (e) => {
    this.setState({
      bookName: e.target.value,
    });
  };
  addDescribtion = (e) => {
    this.setState({
      describtion: e.target.value,
    });
  };
  addImage = (e) => {
    this.setState({
      imageUrl: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header>
            <Modal.Title>New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add New Book"
                  onChange={this.addBookName}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Describtion</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={this.addDescribtion}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add Image URL"
                  onChange={this.addImage}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.AddBooksHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddBook;
