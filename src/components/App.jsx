import { Component } from 'react';
import { Form } from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './filter/FormFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const upperName = name.toUpperCase();
    const upperArrContacts = this.state.contacts.some(
      contacts => contacts.name.toUpperCase() === upperName
    );

    if (upperArrContacts) {
      alert(`${name} is already  in contact`);
      return;
    }

    this.setState(prevState => {
      const newName = { name, number, id: nanoid() };
      return {
        contacts: [newName, ...prevState.contacts],
      };
    });
  };

  onFilter = newFilter => {
    this.setState({ filter: newFilter });
  };
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };
  render() {
    const { contacts, filter } = this.state;

    const filterUpdate = contacts.filter(item => {
      const hasFilter = item.name.toLowerCase().includes(filter.toLowerCase());
      return hasFilter;
    });
    return (
      <div>
        <h1>Phone book</h1>
        <Form submit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filterValue={filter} updateFilter={this.onFilter} />
        {filterUpdate.length > 0 && (
          <ul>
            <ContactsList
              contacts={filterUpdate}
              onDelete={this.deleteContact}
            />
          </ul>
        )}
      </div>
    );
  }
}
