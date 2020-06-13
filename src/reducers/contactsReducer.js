import { CREATE_NEW_CONTACT, GET_ALL_CONTACTS, DELETE_CONTACT, EDIT_CONTACT, DELETE_ALL_CONTACTS } from '../actions/Types';

const initialState = {
  contacts: [],
}

export default (state=initialState, action) => {
  switch(action.type) {
    // Case for creating new contact - Sudama [10/06/2020]
    case CREATE_NEW_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            userId : action.userId,
            ...action.userInfo
          }
        ]
      }

    // Case for Getting all contacts - Sudama [11/06/2020]
    case GET_ALL_CONTACTS:
      return {
        ...state,
      }

    // Case for Delete the Contact Using UserId - Sudama [11/06/2020]
    case DELETE_CONTACT:
      let contactIndex = state.contacts.findIndex(contact => {
        return contact.userId === action.userId
      })

      let updatedContacts = [...state.contacts]
      updatedContacts.splice(contactIndex, 1)
      return {
        ...state,
        contacts: updatedContacts
      }

      // Case to Edit Contact using userId - Sudama [11/06/2020]
      case EDIT_CONTACT:
        let editContactIndex = state.contacts.findIndex(contact => {
          return contact.userId === action.userId
        })
        
        let newContactsList = [...state.contacts]
        newContactsList[editContactIndex] = action.userInfo

        return {
          ...state,
          contacts: newContactsList
        }

      // Case to Delete All COntacts - Sudama [11/06/2020]
      case DELETE_ALL_CONTACTS:
        return {
          contacts: []
        }

      default:
        return state
  }
}