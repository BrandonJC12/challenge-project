import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
export const AppointmentForm = (props)=>{

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  


  return (
  <form onSubmit={this.props.handleSubmit} >
      <label>
        <input
          type="text"
          name="title"
          value={this.props.appointment.title || ''}
          onChange={this.props.handleChange}
          required
          placeholder="Appointment Title"
        />
      </label>
      <br />
      <label>
        <ContactPicker
          name="contact"
          contacts={this.props.contacts}
          onChange={this.props.handleChange}
          placeholder="Appointment With"
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={this.props.appointment.date || ''}
          onChange={this.props.handleChange}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="time"
          name="time"
          value={this.props.appointment.time}
          onChange={this.props.handleChange}
          required
        />
      </label>
      <br />
      <button type='submit'>Add Appointment</button>

    </form>
  );
};
