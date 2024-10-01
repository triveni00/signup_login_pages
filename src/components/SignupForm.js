import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Signup Form Data', values);
    // Handle signup logic here
  };

  return (
    <div className="form-container">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <h1>Signup</h1>
            <div className="input-container">
              <i className="fas fa-user icon"></i>
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="input-container">
              <i className="fas fa-envelope icon"></i>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="input-container">
              <i className="fas fa-lock icon"></i>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </Form>
        )}
      </Formik>
      <div className="sign-in-text">
        Already have an account? <a href="/login">Sign in</a>
      </div>
    </div>
  );
};

export default SignupForm;
