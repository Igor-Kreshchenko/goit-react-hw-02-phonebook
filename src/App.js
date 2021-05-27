import React, { Component } from 'react';

import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = contact => {
    const { contacts } = this.state;
    const { name } = contact;
    const names = contacts.map(item => item.name);

    names.includes(name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  onChangeFilter = event => {
    const inputValue = event.target.value;

    this.setState({ filter: inputValue });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = event => {
    const targetId = event.target.id;

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== targetId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={this.onChangeFilter} />
          <ContactList
            contacts={filteredContacts}
            onClick={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
