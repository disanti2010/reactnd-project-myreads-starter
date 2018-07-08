import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  static propTypes = {
    label: PropTypes.object,
    options: PropTypes.array.isRequired,
    changeMethod: PropTypes.func,
    currentSelected: PropTypes.string
  };

  state = {
    currentSelected: ""
  };

  componentDidMount() {
    const { currentSelected } = this.props;
    this.setState({ currentSelected });
  }

  render() {
    const { label, options, changeMethod } = this.props;
    const onChangeSelect = event => {
      if (changeMethod && typeof changeMethod === "function") {
        this.setState({ currentSelected: event.target.value });
        changeMethod(event.target.value);
      }
    };
    return (
      <select onChange={onChangeSelect} value={this.state.currentSelected}>
        <option value={label.value} disabled>
          {label.description}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
