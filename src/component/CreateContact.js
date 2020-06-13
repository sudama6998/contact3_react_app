import React, { Component } from 'react';
import { connect } from "react-redux";
import { createContact, getAllContacts, deleteUserContact, editUserContact, deleteAllContacts } from '../actions/contactsAction';
import ReusableInputField from '../reusableComponent/ReusableInputField';
import ReusableButton from '../reusableComponent/ReusableButton';
import ReusableContactCard from '../reusableComponent/ReusableContactCard';
import '../assests/styles/createContact.css'

class CreateContact extends Component {
  state = {
    // Holds the user information entered by user in input field - Sudama [10/06/2020]
    userInfo: {
        userName: "",
        userMobile: "",
        userProfession: "",
        userOrg: "",
    },
    lastUserId: 100,
    editMode: false,
    editUserId: null,
    onSubmitFeedback: ""
  }

  // Method to handle the value of input field - Sudama [10/06/2020]
  onChange = (event) => {
    // This will create a copy of userInfo object in state - Sudama [10/06/2020] 
    let user_info = {...this.state.userInfo};
    // Updating the value entered by user into user_info object key - Sudama [10/06/2020]
    user_info[event.target.name] = event.target.value;
    // Updating the userInfo Object inside the state with the new user_info object - Sudama [10/06/2020]
    this.setState({
      userInfo : user_info,
      onSubmitFeedback: ""
    });
  }

  // Method for Create New Contact or Update Contact based on editmode in state - Sudama [10/06/2020]
  onCreateOrUpdateContact = () => {
    let currentUserId;

    // Not to increment the userId if it is in edit mode - Sudama [11/06/2020]
    if(this.state.editMode) {
      currentUserId = this.state.lastUserId;
    } else {
      currentUserId = this.state.lastUserId + 1;
    }
    // Passing the userInfo and userId as arguments to contactsAction Function - Sudama [10/06/2020]
    {this.state.editMode ? 
      this.props.editUserContact(this.state.editUserId, this.state.userInfo)
      : this.props.createContact(this.state.userInfo, currentUserId) 
    }
    // Code to Clear the value of userInfo object in state - Sudama [10/06/2020]
    let user_info = {...this.state.userInfo};
    user_info = {userName: "", userMobile: "", userProfession: "", userOrg: ""};

    // Feedback Based on state Mode - Sudama [11/06/2020]
    let feedbackMsg = [this.state.editMode ? "Contact Updated Successfully" : "Contact Created Successfully"]
    this.setState({
      lastUserId: currentUserId,
      userInfo: user_info,
      onSubmitFeedback: feedbackMsg,
      editMode: false,
      editUserId: null
    })
  }

  // getContactsList = () => {
  //   this.props.getAllContacts();
  //   let newContactList = [...this.props.contacts]
  //   this.setState({
  //     contactsList: newContactList
  //   })
  // }

  // Method to delete the contact of user with the help of user_id - Sudama [11/06/2020]
  deleteContact = (user_id) => {
    this.props.deleteUserContact(user_id);
    this.setState({
      editMode: false,
      editUserId: null,
      onSubmitFeedback: ""
    })
  }

  // Method to edit contact of user using user_id - Sudama [11/06/2020]
  editContact = (user_id) => {
    // Fetching the the index of contact from contacts list in reducers - Sudama [11/06/2020]
    let editUserIndex = this.props.contacts.findIndex(contact => {
      return contact.userId === user_id
    })

    // Fetching the data store at index of userId to update the details in input field - Sudama [11/06/2020]
    let contactData = {...this.props.contacts[editUserIndex]}
    this.setState({
      editMode: true,
      editUserId: user_id,
      userInfo: contactData,
      onSubmitFeedback: ""
    })
  }

  // TO Delete All Contacts - Sudama [11/06/2020]
  deleteAllUserContacts = () => {
    this.props.deleteAllContacts();
    this.setState({
      onSubmitFeedback: "",
      editMode: false,
      editUserId: null
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card create_contact_card py-2 px-3 pb-4 mt-5">
              <div className="row">
                <div className="title w-100 text-center pb-2">
                  <h2>{this.state.editMode ? "Update Contact" : "Create New Contact" }</h2>
                </div>
              </div>
              {/* Contact Form Starts Here - Sudama [10/06/2020] */}
              <div className="contact_form">
                <div className="form-row">
                  <div className="form-group col-12">
                    <ReusableInputField
                      type="text"
                      placeholder="Enter Your Name"
                      name="userName"
                      onchange={this.onChange}
                      value={this.state.userInfo.userName}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <ReusableInputField
                      type="text"
                      placeholder="Enter Your Mobile no."
                      name="userMobile"
                      onchange={this.onChange}
                      value={this.state.userInfo.userMobile}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <ReusableInputField
                      type="text"
                      placeholder="Enter Your Profession"
                      name="userProfession"
                      onchange={this.onChange}
                      value={this.state.userInfo.userProfession}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <ReusableInputField
                      type="text"
                      placeholder="Enter Your Organisation"
                      name="userOrg"
                      onchange={this.onChange}
                      value={this.state.userInfo.userOrg}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <ReusableButton
                    buttonName={this.state.editMode ? "Update Contact" : "Create Contact" }
                    onclick={() => this.onCreateOrUpdateContact()}
                  />
                </div>
                <div className="row">
                  <div className="w-100 text-center">
                    <small className="validation_feedback">
                      {this.state.onSubmitFeedback}
                    </small>
                  </div>
                </div>
                </div>
                {/* Contact Form Ends Here - Sudama [10/06/2020] */}
            </div>
            {/* <div className="button_card mt-3">
              <ReusableButton
                buttonName="Get All Contact"
                onclick={() => this.getContactsList()}
              />
            </div> */}
            <div className="button_card mt-3">
              <ReusableButton
                buttonName="Delete All Contact"
                onclick={() => this.deleteAllUserContacts()}
              />
            </div>
          </div>
          {/* Code to Display Contacts List - Sudama [10/06/2020] */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-8 all_contacts_container">
            <div className="row">
            {this.props.contacts.length > 0 ? 
              this.props.contacts?.map((contact, index) => (
                <div className="col-12 col-sm-12 col-lg-6">
                <ReusableContactCard
                  key={"contact" + contact.userId}
                  index={index}
                  userId={contact.userId}
                  userName={contact.userName}
                  userMobile={contact.userMobile}
                  userProfession={contact.userProfession}
                  userOrg={contact.userOrg}
                  onDeleteClick={() => this.deleteContact(contact.userId)}
                  onEditClick={() => this.editContact(contact.userId)}
                /></div>
              )) 
              : <div className="d-flex align-items-center justify-content-center w-100" style={{height:'100vh'}}><p className="text-muted">Contacts Will be Displayed Here</p></div>
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  contacts: state.contactsReducer.contacts,
})

export default connect(
  mapStateToProps, 
  {createContact, getAllContacts, deleteUserContact, editUserContact, deleteAllContacts})(CreateContact);