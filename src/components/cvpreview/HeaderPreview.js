import React, { Component } from "react";

class HeaderPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-preview">
        <div className="name-container">
          <h1>
            {this.props.personalInformations.firstName +
              " " +
              this.props.personalInformations.lastName}
          </h1>
        </div>
        <div className="title-container">
          <h2>{this.props.personalInformations.title}</h2>
        </div>
      </div>
    );
  }
}

export default HeaderPreview;
