import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAllContacts } from 'redux/contacts/contacts-operation';
import { getFilteredContacts } from 'redux/contacts/contacts-selecrors';

import styles from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contactsList = useSelector(getFilteredContacts);

  return (
    <ul className={styles.list}>
      {contactsList.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactList;

ContactList.prototypes = {
  onDeleteClick: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

//  loading && <Loader />;
