import { CREATE_NEW_CONTACT, GET_ALL_CONTACTS, DELETE_CONTACT, EDIT_CONTACT, DELETE_ALL_CONTACTS } from './Types';

// Method for create contact - Sudama [10/06/2020]
export const createContact = (userInfo, userId) => {
  return {
    type: CREATE_NEW_CONTACT,
    userId: userId,
    userInfo: userInfo
  }
}

// Method to fetch all contacts - Sudama [11/06/2020]
export const getAllContacts = () => {
  return {
    type: GET_ALL_CONTACTS,
  }
}

export const deleteAllContacts = () => {
  return {
    type: DELETE_ALL_CONTACTS
  }
}

// Method to delete contact - Sudama [11/06/2020]
export const deleteUserContact = (userId) => {
  return {
    type: DELETE_CONTACT,
    userId: userId
  }
}

// Method to edit contact - Sudama [11/06/2020]
export const editUserContact = (userId, userInfo) => {
  return {
    type: EDIT_CONTACT,
    userId: userId,
    userInfo: userInfo
  }
}