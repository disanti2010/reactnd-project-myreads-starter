import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  static propTypes = {
    label: PropTypes.object,
    options: PropTypes.array.isRequired
  };

  render() {
    const { label, options } = this.props;
    return (
      <select>
        <option value={label.value} disabled>
          {label.description}
        </option>
        {options.map(option => (
          <option value={option.value}>{option.description}</option>
        ))}
      </select>
    );
  }
}

export default Select;
