import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/Add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});

export const deleteContact = createAction('contacts/Delete');

export const changeFilter = createAction('filter/change');
