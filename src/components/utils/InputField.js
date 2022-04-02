import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-field">
        <input
          type={this.props.type}
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default InputField;
