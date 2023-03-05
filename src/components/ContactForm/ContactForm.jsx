import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import Button from 'shared/Button/Button';
import LabelInput from 'shared/LabelInput/LabelInput';
import Loader from 'components/Loader/Loader';
import { getLoading } from 'redux/contacts/contacts-selecrors';

import { fetchAddContact } from 'redux/contacts/contacts-operation';

import styles from './ContactFofm.module.css';

import initialState from './initialState';

const ContactForm = () => {
  const dispatch = useDispatch();

  const onChangingInput = e => {
    const objectKey = e.target.name;
    initialState[objectKey] = e.target.value;
    return;
  };

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const clearForm = e => {
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  const loading = useSelector(getLoading);

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
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with + "
        required="required"
      />
      <Button title="Add contact" type="submit" />
      {loading && <Loader />}
    </form>
  );
};

export default ContactForm;

ContactForm.prototypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
