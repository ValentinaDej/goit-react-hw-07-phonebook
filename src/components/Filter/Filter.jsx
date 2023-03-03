import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import LabelInput from 'shared/LabelInput/LabelInput';
import styles from './Filter.module.css';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    const action = setFilter(e.target.value);
    dispatch(action);
  };

  return (
    <div className={styles.ContactForm}>
      <LabelInput
        caption="Find contacts by name"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;

Filter.prototypes = {
  handleChange: PropTypes.func,
};
