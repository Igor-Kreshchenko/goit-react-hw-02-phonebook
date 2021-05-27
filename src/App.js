import React, { Component } from 'react';

import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = contact => {
    this.setState(prevState => ({ contacts: [contact, ...prevState.contacts] }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <ContactList contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
