import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className="">
        {contacts.map(({ id, name, number }) => (
            <li key={id}
                className="">
                <p className="">{name}</p>
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