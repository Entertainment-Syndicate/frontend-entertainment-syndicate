import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button } from 'react-bootstrap';
// import BestBooks from './components/BestBooks';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
// import AddBook from './components/AddBook';
// import UpdateBook from './components/UpdateBook';
class MyFavoriteBooks extends React.Component {
  state = {
    show: false,
    showUpdate: false,
    books: [],
    oldData: {
      index: '',
      bookName: '',
      describtion: '',
      image: '',
    },
  };
  componentDidMount = async () => {
    const books = await axios.get(process.env.REACT_APP_SERVER, {
      params: { userEmail: this.props.auth0.user.email },
    });
    this.setState({
      books: books.data,
    });
  };
  getNewBookData = (newBooks) => {
    this.setState({
      books: newBooks,
      show: false,
      showUpdate: false,
    });
  };

  deleteBook = async (index) => {
    const books = await axios.delete(
      `${process.env.REACT_APP_SERVER}/${index}`,
      { params: { email: this.props.auth0.user.email } }
    );

    this.setState({
      books: books.data,
    });
  };

  handleClose = () => this.setState({ show: false, showUpdate: false });
  handleShow = () => this.setState({ show: true });
  handleShowUpdate = () => this.setState({ showUpdate: true });

  ////////////////////////////////////////// UPDATE
  updateBook = (index, bookName, describtion, image) => {
    this.setState({
      oldData: {
        index,
        bookName,
        describtion,
        image,
      },
    });
    console.log(this.state.oldData);
  };
  render() {
    return (
      <Jumbotron>
        <div className="header-button">
          <h1>My Favourite Books</h1>
          <Button
            variant="primary"
            onClick={this.handleShow}
            style={{ margin: '40px 0' }}
          >
            Add to Favourite Books
          </Button>
        </div>
        {/* <AddBook
          show={this.state.show}
          handleClose={this.handleClose}
          getNewBookData={this.getNewBookData}
          email={this.props.auth0.user.email}
        /> */}
        {/* {this.state.showUpdate && (
          <UpdateBook
            show={this.state.showUpdate}
            handleClose={this.handleClose}
            oldData={this.state.oldData}
            email={this.props.auth0.user.email}
            getNewBookData={this.getNewBookData}
          />
        )} */}
        {/* <BestBooks
          deleteBook={this.deleteBook}
          books={this.state.books}
          updateBook={this.updateBook}
          handleShowUpdate={this.handleShowUpdate}
        /> */}
      </Jumbotron>
    );
  }
}
export default withAuth0(MyFavoriteBooks);
