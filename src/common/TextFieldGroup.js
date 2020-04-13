import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
class TextFieldGroup extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentWillReceiveProps(nextProps) {
    //debugger;
    console.log(nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
   // debugger;
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }

  }

  render() {
    return (
      <div className="form-group">
        <input
          type={this.props.type}
          className={classnames("form-control form-control-lg", {
            "is-invalid": this.props.error
          })}
  
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
        />
        {this.props.info && (
          <small className="form-text text-muted">{this.props.info}</small>
        )}
        {this.props.error && (
          <div className="invalid-feedback">{this.props.error}</div>
        )}
      </div>
    );
  }
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
