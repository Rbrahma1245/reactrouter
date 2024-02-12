import { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="link">
            HOME
          </Link>
          <Link to="/user/123" className="link">
            USER
          </Link>
        </div>
        <div className="header-right">
          <Link to="/about" className="link">
            ABOUT
          </Link>
          <Link to="/contact" className="link">
            CONTACT
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
