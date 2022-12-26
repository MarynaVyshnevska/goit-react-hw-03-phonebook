import React from "react";
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const Phonebook = ({ title, children }) => (
    <div className={css.Phonebook__container}>
        <p className={css.Phonebook__title}>{title}</p>
        {children}
    </div>
)

export default Phonebook;

Phonebook.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.node,
}