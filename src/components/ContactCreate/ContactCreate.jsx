import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// // import css from './Phonebook.module.css';

class ContactCreate extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
        // console.log(this.state);
    }

    handleSubmit = e => {
        e.preventDefault();
        
        // console.log(this.state);
        // this.props.onSubmit(this.state);
        this.props.onSubmit({id: nanoid(), ...this.state});
        
        this.reset();
    }
    reset = () =>{
        this.setState({ name: '', number: '' });
    }
    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <p>Phone</p>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">
                    Add contacts
                </button>
            </form>
        )
    }
};

export default ContactCreate;

ContactCreate.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}