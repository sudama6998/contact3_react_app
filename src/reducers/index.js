import { combineReducers } from "redux";
import contacts from "./contactsReducer";

export default combineReducers({
  contactsReducer: contacts,
});
