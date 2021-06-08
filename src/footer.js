import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr></hr>
        <Navbar>
          <p className="footer2" to="/explore">
            📧 contactus@EntertainmentSyndicate.com &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; &nbsp; 📞 0780000000
          </p>
        </Navbar>
        <Link className="footer" to="/">
          <a class="logo-icon" href="https://www.facebook.com/LTUC.JO/">
            <img
              src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png"
              alt="Facebook"
              width="30"
              height="30"
            />
          </a>
        </Link>
        <Link className="footer" to="/">
          <a class="logo-icon" href="https://www.instagram.com/ltuc.jo/?hl=en">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
              alt="Instagram"
              width="30"
              height="30"
            />
          </a>
        </Link>
        <Link className="footer" to="/">
          <a class="logo-icon" href="https://twitter.com/ltucjo?lang=en">
            <img
              id="twt"
              src="https://image.flaticon.com/icons/png/512/124/124021.png"
              alt="Instagram"
              width="30"
              height="30"
            />
          </a>
        </Link>
        <p className="footer3">&copy; Entertainment Syndicate</p>
        <hr></hr>
      </div>
    );
  }
}

export default Footer;
