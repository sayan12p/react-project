import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
class SelectListGroup extends Component {
  render() {
    const selectOptions = this.props.options.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));
    return (
      <div className="form-group">
        <select
          // className={classnames("form-control form-control-lg", {
          //   "is-invalid": this.props.error
          // })}
          className="form-control form-control-lg"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          {selectOptions}
        </select>
        {/* {this.props.info && (
          <small className="form-text text-muted">{this.props.info}</small>
        )}
        {this.props.error && (
          <div className="invalid-feedback">{this.props.error}</div>
        )} */}
      </div>
    );
  }
}

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
