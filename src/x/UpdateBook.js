import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class UpdateBook extends Component {
  state = {
    bookName: this.props.oldData.bookName,
    describtion: this.props.oldData.describtion,
    imageUrl: this.props.oldData.image,
  };
  updateBooksHandler = async () => {
    const formData = {
      bookName: this.state.bookName,
      describtion: this.state.describtion,
      image: this.state.imageUrl,
      email: this.props.email,
    };
    const updatedData = await axios.put(
      `${process.env.REACT_APP_SERVER}/${this.props.oldData.index}`,
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
    console.log(1, this.state.bookName);
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
                  value={this.state.bookName}
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
                  value={this.state.describtion}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add Image URL"
                  onChange={this.addImage}
                  value={this.state.imageUrl}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.updateBooksHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateBook;
