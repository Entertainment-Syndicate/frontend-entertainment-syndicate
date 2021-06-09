import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Modal, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import instagram from './image/instagram.png';
import facebook from './image/facebook.png';

import twitter from './image/twitter.png';

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
            <img src={facebook} alt="Facebook" width="30" height="30" />
          </a>
          {/* </Link> */}
          {/* <Link className="footer" to="/"> */}
          <a class="logo-icon" href="https://www.instagram.com/ltuc.jo/?hl=en">
            <img src={instagram} alt="Instagram" width="30" height="30" />
          </a>
          {/* </Link> */}
          {/* <Link className="footer" to="/"> */}
          <a class="logo-icon" href="https://twitter.com/ltucjo?lang=en">
            <img
              id="twt"
              src={twitter}
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
