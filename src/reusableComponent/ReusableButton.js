import React, { Component } from 'react'

class ReusableButton extends Component {
  render() {
    return (
      // Code For the Button - Sudama [10/06/2020]
      <button
        className="btn btn-primary w-100"
        onClick={this.props.onclick}>
        {this.props.buttonName}
      </button>
    )
  }
}

export default ReusableButton;