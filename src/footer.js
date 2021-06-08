import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Modal, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      mail: '',
      showAlert: false,
    };
  }

  contactUs = () => {
    this.setState({
      show: true,
    });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };

  alert = () => {
    this.setState({
      showAlert: true,
    });
  };
  render() {
    return (
      <div>
        <div className="footerElement">
          <hr></hr>
          <Navbar>
            <p onClick={this.contactUs} className="footer2" to="/explore">
              📧 Contactus &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
            </p>
            <p className="footer2">📞 00962791234567</p>
          </Navbar>
          {/* <Link className="footer" to="/"> */}
          <a class="logo-icon" href="https://www.facebook.com/LTUC.JO/">
            <img
              src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png"
              alt="Facebook"
              width="30"
              height="30"
            />
          </a>
          {/* </Link> */}
          {/* <Link className="footer" to="/"> */}
          <a class="logo-icon" href="https://www.instagram.com/ltuc.jo/?hl=en">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
              alt="Instagram"
              width="30"
              height="30"
            />
          </a>
          {/* </Link> */}
          {/* <Link className="footer" to="/"> */}
          <a class="logo-icon" href="https://twitter.com/ltucjo?lang=en">
            <img
              id="twt"
              src="https://image.flaticon.com/icons/png/512/124/124021.png"
              alt="Instagram"
              width="30"
              height="30"
            />
          </a>
          {/* </Link> */}
          <p className="footer3">&copy;Entertainment Syndicate</p>
          <hr></hr>
        </div>

        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Control
                type="text"
                placeholder="Send us your request/complain"
                onChange={this.state.mail}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal} variant="danger">
              Close
            </Button>
            <Button onClick={this.hideModal} variant="primary">
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Footer;
