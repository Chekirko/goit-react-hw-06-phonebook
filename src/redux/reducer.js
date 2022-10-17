import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import { addContact, deleteContact, changeFilter } from 'redux/actions';
// import { createReducer } from '@reduxjs/toolkit';

// const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case addContact.type:
//       return [...state, payload];
//     case deleteContact.type:
//       return [...state.filter(contact => contact.id !== payload)];

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case changeFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactsReducer = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     return [...state, payload];
//   },
//   [deleteContact]: (state, { payload }) => {
//     return [...state.filter(contact => contact.id !== payload)];
//   },
// });

// const filterReducer = createReducer('', {
//   [changeFilter]: (state, { payload }) => payload,
// });

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
