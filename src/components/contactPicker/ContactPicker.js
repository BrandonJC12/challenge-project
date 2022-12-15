import React from "react";

export const ContactPicker = (props) => {
  return (
        <select onChange={this.props.handleChange} name="" >
          <option 
          key={-1} 
          selected="selected" 
          value="">No Contact Selected</option>
          {this.props.contacts.map(
          (contact) => { 
            return (
           <option value={contact.name} key={contact.name}> {contact.name}</option> 
          )}
        )}
        </select>
  );
};