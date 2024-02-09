import { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div style={{ display: "flex" , background:"#1F2544", color:"white" , padding:20, marginBottom:50}}>
        <div className="header-left" style={{width:"50%",display:"flex", gap:20}}>
          <Link to="/" style={{color:"white", textDecoration:"none"}}>HOME</Link>
          <Link to="/user/123 " style={{color:"white", textDecoration:"none"}}>USER</Link>
        </div>
        <div className="header-right" style={{width: "50%", display:"flex", justifyContent:"end", gap:20}}>
          <Link to="/about" style={{color:"white", textDecoration:"none"}}>ABOUT</Link>
          <Link to="/contact" style={{color:"white", textDecoration:"none"}}>CONTACT</Link>
        </div>
      </div>
    );
  }
}

export default Header;
