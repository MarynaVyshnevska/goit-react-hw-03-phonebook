import React, { Component } from 'react';

// import Phonebook from './Phonebook';
import ContactCreate from './ContactCreate';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './ContactList/Filter';

import contactsJson from './contacts.json';

export class App extends Component {
  state = {
    contacts: contactsJson,
    filter: '',

  }

  addContact = newContact => {
    
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      }
    })
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });

  }

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }
  availableContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.map(contact =>
        contact.id === contactId
          ? {...contact} : contact )
    }))
  }

  render() {
    const {filter} = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactCreate onSubmit={this.addContact} />
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
            onAvailableContacts={this.availableContacts}
          />
        </Section>
      </>
    )
  }
};
