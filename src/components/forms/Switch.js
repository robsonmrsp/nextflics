import React from "react";
import { useField } from "formik";

export const Switch = ({ ...props }) => {
  const { className } = props;
  const [field, , { setValue }] = useField(props);
  return (
    <input
      wrapperClassName={className}
      {...field}
      {...props}
      type="checkbox"
      value={field.value}
      onChange={(objectDate) => {
        setValue(objectDate.target.checked);
      }}
    />
  );
};
