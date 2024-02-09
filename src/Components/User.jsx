/* eslint-disable react/prop-types */
import { Component } from "react";
import WithRouter from "./WithRouter";

class User extends Component {
  render() {
    console.log(this.props.params.userId);
    return (
      <div>
        <h3>
          THIS PAGE IS FOR USER <h1>{this.props.params.userId}</h1>{" "}
        </h3>
      </div>
    );
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export default WithRouter(User);
