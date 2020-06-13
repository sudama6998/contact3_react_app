import React, { Component } from 'react'

class ReusableInputField extends Component {
  render() {
    return (
      <>
        {/* Code For Input Field - Sudama [10/06/2020] */}
        <input
          type={this.props.type}
          className="form-control"
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.onchange}
          value={this.props.value}
        />
        {/* If some error found then display here - Sudama [10/06/2020] */}
        {/* {this.props.error ? <div className="invalid-feedback">{error}</div> : null} */}
      </>
    )
  }
}

export default ReusableInputField;