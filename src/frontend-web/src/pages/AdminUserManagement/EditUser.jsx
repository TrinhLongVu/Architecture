import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useParams} from "react-router-dom";

import "./EditUser.css"

export default function EditUser(){
    const {username} = useParams();
    let initialValues ={
        name: "" ,
        username: "",
        role: 'Player',
        phone: '',
        email: '',
        password: '',
        status: 'Active',
      };
    let validationSchema;
    let onSubmit;

    React.useEffect(() => {
        //fetch data
        if(username !== undefined){
            initialValues = {
                name: username,
                username: username,
                role: 'Player',
                phone: '',
                email: '',
                password: '',
                status: 'Active',
              };

              console.log(initialValues)
        }
    },[])

    
    console.log(initialValues);
  
    validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string().required('Required'),
    });
  
    onSubmit = (values) => {
      console.log('Form data', values);
    };


    return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
              <Form className="form-container">
                <div>
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" className="input-field" />
                  <ErrorMessage name="name" component="div" />
                </div>
                
                <div>
                  <label htmlFor="username">Username</label>
                  <Field type="text" id="username" name="username" className="input-field" />
                  <ErrorMessage name="username" component="div" />
                </div>
                
                <div>
                  <label htmlFor="role">Role</label>
                  <Field as="select" id="role" name="role" className="input-field">
                    <option value="Player">Player</option>
                    <option value="Admin">Admin</option>
                  </Field>
                </div>
                
                <div>
                  <label htmlFor="phone">Phone</label>
                  <Field type="text" id="phone" name="phone" className="input-field" />
                  <ErrorMessage name="phone" component="div" />
                </div>
                
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" className="input-field" />
                  <ErrorMessage name="email" component="div" />
                </div>
                
                <div>
                  <label htmlFor="password">Password</label>
                  <Field type="password" id="password" name="password" className="input-field" />
                  <ErrorMessage name="password" component="div" />
                </div>
                
                <div>
                  <label htmlFor="status">Status</label>
                  <Field as="select" id="status" name="status" className="input-field">
                    <option value="Banned">Banned</option>
                    <option value="Active">Active</option>
                  </Field>
                </div>
                
                <div>
                  <button type="submit" disabled={isSubmitting} className="submit-button">Save</button>
                  <button type="button" className="cancel-button">Cancel</button>
                </div>
              </Form>
            )}
        </Formik>
    )
}