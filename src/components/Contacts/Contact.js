import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Contacts from "./Contacts";

//import { GET_CONTACTS } from '../../actions/types';

import { getContacts } from "../../actions/contactActions";

class Contact extends Component {
  componentDidMount() {
    console.log("in did mount");
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    console.log(contacts);

    return (
      <React.Fragment>
        <h1 className="display-5 mb-3 heading">
          <span className="text-danger">Contact</span> Lists
        </h1>
        {contacts.map(contact => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { getContacts }
)(Contact);
