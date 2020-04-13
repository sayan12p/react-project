import React, { Component } from 'react'
import propTypes from "prop-types";

 class InputGroup extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={this.props.icon} />
          </span>
        </div>
        <input
          className="form-control form-control-lg"
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>

        )
    }
}
InputGroup.propTypes={
    name:propTypes.string.isRequired,
    placeholder:propTypes.string,
    value:propTypes.isRequired,
    icon:propTypes.string,
    error:propTypes.string,
    type:propTypes.string.isRequired,
    onchange:propTypes.func.isRequired
}
InputGroup.defaultProps = {
    type: "text"
  };
  
export default InputGroup;