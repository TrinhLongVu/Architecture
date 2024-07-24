import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useParams} from "react-router-dom";

import "./style.css";

function EditGame() {
  const {gameId} = useParams();
  const [imageFile,setImageFile] = useState();

  let initialValues ={
      name: "" ,
      type: "",
      exchangable: 'No',
      instruction: '',
      imageIile: '',
    };
  let validationSchema;
  let onSubmit;

  React.useEffect(() => {
      //fetch data
      if(gameId !== undefined){
          initialValues = {
            name: gameId ,
            type: gameId,
            exchangable: 'No',
            instruction: '',
            imageFile: undefined,
            };
            console.log(initialValues)
      }
  },[]);

  function setFieldValue(fieldName, file){
    console.log(file);
  }

  const FileUpload = ({ field ,setFieldValue }) => {
    const onDrop = React.useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
    
      reader.onloadend = () => {
        const base64data = reader.result;  
        setFieldValue(() => base64data);
        // Now base64data holds the content of the image file as a base64 encoded string
        // You can set it as the src of an img element to display the image
        //const imgTag = document.getElementById('DroppedImage');
        //if (imgTag !== null) {
        //  imgTag.src = base64data;
        //} 
      };
    
      reader.readAsDataURL(file);     

      //setFieldValue("file", acceptedFiles[0]);
    }, []); //[setFieldValue]
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
    return (
      <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
        {field === undefined &&
          <div className="dropzone-content">
            <div className="icon">🖼️</div>
            <p>Drop Image Here, Paste Or</p>
            <button type="button" className="select-button">Select</button>
          </div>}
        <img className='Image-display' id='DroppedImage' src={field}></img>
        
        
    </div>
    );
  };

  validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    instruction: Yup.string(),
  });

  onSubmit = (values) => {
    const data = {
      ...values,
      imageFile: imageFile
    }
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
              <label htmlFor="type">Type</label>
              <Field type="text" id="type" name="type" className="input-field" />
              <ErrorMessage name="type" component="div" />
            </div>
            
            <div>
              <label htmlFor="exchangable">Exchangable</label>
              <Field as="select" id="exchangable" name="exchangable" className="input-field">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </Field>
            </div>
            
            <div>
              <label htmlFor="phone">Instruction</label>
              <Field as="textarea" id="instruction" name="instruction" className="input-field" />
              <ErrorMessage name="instruction" component="div" />
            </div>
            
            <FileUpload setFieldValue={setImageFile} field={imageFile}/>
            
            <div>
              <button type="submit" disabled={isSubmitting} className="submit-button">Save</button>
              <button type="button" className="cancel-button">Cancel</button>
            </div>
          </Form>
        )}
    </Formik>
  )
}

export default EditGame