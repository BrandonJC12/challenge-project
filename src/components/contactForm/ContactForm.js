import React from "react";

export const ContactForm=(props)=>{

  return (
    <form onSubmit={this.props.handleSubmit }>
      <label>
        <input 
        name="name"
        value={this.props.contacts.name || ''} 
        type='text' 
        onChange={this.props.handleChange } 
        required placeholder='Contact Name' />
      </label>
      <br/>
      <label>
        <input 
        name="email"
        value={this.props.contacts.email || ''} 
        type='email' 
        onChange={this.props.handlechange} 
        required placeholder='Email address'/>
      </label>
      <br/>
      <label>
        <input 
        name="phone"
        value={this.props.contacts.phone || ''} 
        pattern={"[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]"} 
        type='tel' 
     onChange={this.props.handleChange } 
        required placeholder='Contact Number' />
      </label> 
      <br />
      <button type='submit'>Add contact</button>
    </form>
  );
};