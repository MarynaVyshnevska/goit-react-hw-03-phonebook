import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact, onAvailableContacts }) => (
    <ul className="">
        {contacts.map(({ id, name, number }) => (
            
            <li key={id}
                className="">
                <p className="">{name.split(" ").map((word) => { 
                    return word[0].toUpperCase() + word.substring(1); 
                    }).join(" ")}
                </p>
                <p className="">{number}</p>
                <button
                    type="button"
                    className=""
                    onClick={() => onDeleteContact(id)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
)

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
}