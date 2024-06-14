import React, { useState } from 'react';

export default function Form({ setUsers }) {
  const [form, setForm] = useState({});
  function onChange(e) {
    console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function onClick(e) {
    e.preventDefault();
    if (form.email == null || form.name == null || form.website == null) {
      alert('Fields cannot be empty!');
      return;
    }
    setUsers((prev) => [...prev, form]);
  }
  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const website = formData.get('website');
    setUsers((prev) => [...prev, { name, email, website }]);
    // console.log(formData);
    console.log(e);
  }

  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      <h1>Contact Form</h1>
      <input
        className="input"
        placeholder="Name"
        onChange={(e) => onChange(e)}
        name="name"
      />
      <input
        className="input"
        placeholder="Email"
        name="email"
        onChange={(e) => onChange(e)}
      />
      <input
        className="input"
        placeholder="Website"
        name="website"
        onChange={(e) => onChange(e)}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
