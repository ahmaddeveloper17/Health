"use client"
import { Shadows_Into_dark } from 'next/font/google';
import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(40, 40, 40, 40)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
    color: '#333',
  },
  input: {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#4a90e2',
    color: '#ffffff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  pageBackground: {
    height: '100vh',
    background: 'linear-gradient(to right, #4a90e2, #50c878)', // Linear gradient background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Patient Appointment</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
          </label>
          <label style={styles.label}>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
          </label>
          <label style={styles.label}>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} style={styles.input} />
          </label>
          <label style={styles.label}>
            Preferred Date:
            <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} style={styles.input} />
          </label>
          <label style={styles.label}>
            Preferred Time:
            <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} style={styles.input} />
          </label>
          <label style={styles.label}>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} style={styles.input} />
          </label>
          <button type="submit" style={styles.button}>
            Submit Appointment Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
