import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Min 3 chars!")
    .max(50, "Max 50 chars!")
    .matches(/^[^0-9]*$/, "Cannot contain numbers")
    .required("Required"),
  number: Yup.string()
    .matches(/^[\d-]+$/, "Invalid phone number format")
    .max(13, "Max 13 symbols!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const id = nanoid();
    const newContact = { id: id, ...values };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} name="name" id={nameId}></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.container}>
          <label className={css.label} htmlFor={numberId}>
            Number
          </label>
          <Field className={css.input} name="number" id={numberId}></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
