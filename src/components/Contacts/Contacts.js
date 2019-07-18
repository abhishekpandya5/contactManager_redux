import React, { Component } from "react";
import PropTypes from "prop-types";
//import axios from "axios";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

class Contacts extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleDelete = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h5>
          {name} &nbsp;
          <i
            className={`fas fa-sort-down ${
              showContactInfo ? "rotate_clock" : "rotate_anticlock"
            }`}
            onClick={this.onShowClick}
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.handleDelete.bind(this, id)}
          />
          <Link to={`/contacts/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "grey",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h5>

        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contacts.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteContact }
)(Contacts);
