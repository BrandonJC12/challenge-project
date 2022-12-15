import React,{useState}from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const[user,setUser]=useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
this.props.addAppointment(user);
         setUser({});
  };
  const handleChange=({target})=>{
    const {name,value}=target;
    setUser((prevUser)=>({ ...prevUser,[name]: value }));
  
  }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleChange={handleChange} handleSubmit={handleSubmit}
        contacts={this.props.contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={this.props.appointments} />
      </section>
    </div>
  );
};