
import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = (props) => {

const [user,setUser]=useState({});
const[duplicated,setDuplicated]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicated===false){
      this.props.addContact(user);
      setUser({});
    }
  }

const handleChange = ({ target }) => {
const { name, value } = target;
    setUser((prev) => ({ ...prev,[name]: value }));
  };

useEffect(()=>{
  const val= this.props.contacts.find((contact)=>contact.name===user.name);
  
  if(val){
    setDuplicated(true);
  }
  
},[user,duplicated]);
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm contacts={this.props.contacts}handleChange={handleChange} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={this.props.contacts}/>
      </section>
    </div>
  );
};
