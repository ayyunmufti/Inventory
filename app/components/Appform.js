import { Formik } from "formik";
import React from "react";

function Appform({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default Appform;
