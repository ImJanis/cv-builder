import React, { Component } from "react";

class TextAreaField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-area-field">
        <textarea
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default TextAreaField;
