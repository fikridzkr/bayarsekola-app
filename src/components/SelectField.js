import React from "react";
import { ErrorMessage, useField } from "formik";
import Select from "react-select";
export const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    </div>
  );
};
