import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleAddName = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handlerSubmit = evt => {
    evt.preventDefault();
    this.props.submit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <label>
            Name
            <input
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleAddName}
            />
          </label>
          <label>
            Name
            <input
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleAddName}
            />
          </label>
          <button type="submit" onClick={this.handlerSubmit}>
            add contact
          </button>
        </form>
      </div>
    );
  }
}
