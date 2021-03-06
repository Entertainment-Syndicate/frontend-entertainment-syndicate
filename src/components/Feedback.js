import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export class Feedback extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.feedbackModal}
          onHide={this.props.hideFeedbackModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Control
                type="text"
                value={this.props.feedback}
                onChange={(e) => this.props.changeFeedback(e)}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.deleteFeedback} variant="danger">
              Delete Review
            </Button>
            <Button onClick={this.props.updateFeedback} variant="primary">
              Update Review
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Feedback;
