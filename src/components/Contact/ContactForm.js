import React from "react";

import TextField from "./TextField";

const ContactForm = ({ form: formik }) => (
  <div>
    {console.log(formik)}
    <form onSubmit={formik.handleSubmit}>
      <TextField
        type="text"
        name="name"
        label="Imię i nazwisko"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        touched={formik.touched.name}
        error={formik.errors.name}
      />
      <TextField
        type="text"
        name="email"
        label="Adres e-mail"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        touched={formik.touched.email}
        error={formik.errors.email}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default ContactForm;
