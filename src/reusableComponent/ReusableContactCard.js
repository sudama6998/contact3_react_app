import React, { Component } from 'react';
import classnames from 'classnames';
import '../assests/styles/reusableContactCard.css'

class ReusableContactCard extends Component {
  state = {
    showDetails : false
  }

  componentDidMount = () => {
    //console.log(this.props.userId)
  }

  // View Details Toggle - Sudama [11/06/2020]
  viewDetailsToggle = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    return (
      
      <div className="card contact_card m-2 w-100">
        {/* Delete and Edit Icon on Card - Sudama [11/06/2020] */}
        <div onClick={this.props.onDeleteClick} className="delete_icon"><i className="fas fa-trash" /></div>
        <div onClick={this.props.onEditClick} className="edit_icon"><i className="fas fa-edit" /></div>
         <div className="card-body">
            <h6 className="card-title">Contact No. {this.props.index + 1}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Name: {this.props.userName}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Mobile No: {this.props.userMobile}</h6>
            {this.state.showDetails ?
              <>
              <h6 className="card-subtitle mb-2 text-muted">Prof: {this.props.userProfession}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Org: {this.props.userOrg}</h6>
              </>
            : null }
            <div className="view_more_link w-100">
            <div className="view_more_details" onClick={() => this.viewDetailsToggle()}>
            <span className=" card-link">
              {this.state.showDetails ? 'View Less' : 'View More'}
            </span>
              <div className={classnames('view_more_icon', {'active' : this.state.showDetails})}>
                <i className='fas fa-chevron-down'></i>
              </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReusableContactCard;