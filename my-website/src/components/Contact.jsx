// src/components/Contact.jsx
import React, { useState } from "react";
import ButtonClickDown from "./Librarys/Contactbutton";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name || form.name.length < 2) newErrors.name = "Name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email format.";
    if (form.phone && !/^\d+$/.test(form.phone)) newErrors.phone = "Phone must be numeric.";
    if (!form.message || form.message.length < 10) newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length === 0) {
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setErrors(foundErrors);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-2xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6 text-center">Contact Me</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="text"
          placeholder="Phone (optional)"
          className="w-full p-3 border rounded"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <ButtonClickDown/>
      </form>
    </section>
  );
};

export default Contact;

