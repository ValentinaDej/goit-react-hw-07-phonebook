import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import Button from 'shared/Button/Button';
import LabelInput from 'shared/LabelInput/LabelInput';

import { addContact } from 'redux/contacts/contactsSlice';

import styles from './ContactFofm.module.css';

import initialState from './initialState';

const ContactForm = () => {
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const onChangingInput = e => {
    const objectKey = e.target.name;
    initialState[objectKey] = e.target.value;
    return;
  };

  const handleAddContact = data => {
    const name = data.name;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const number = data.number;
    const action = addContact({ name, number });
    dispatch(action);
  };

  const clearForm = e => {
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <form
      className={styles.сontactForm}
      onSubmit={e => {
        e.preventDefault();
        handleAddContact(initialState);
        clearForm(e);
      }}
    >
      <LabelInput
        caption="Name"
        onChange={onChangingInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required="required"
      />
      <LabelInput
        caption="Number"
        onChange={onChangingInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required="required"
      />
      <Button title="Add contact" type="submit" />
    </form>
  );
};

export default ContactForm;

ContactForm.prototypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
