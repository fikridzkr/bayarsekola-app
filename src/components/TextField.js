import { ErrorMessage, useField } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          {...field}
          {...props}
          autoComplete="off"
          className={`${meta.touched && meta.error && "is-invalid"}`}
        />
        <ErrorMessage component="div" name={field.name} className="error" />
      </Form.Group>
    </div>
  );
};
