import React from 'react';
import {AutoForm} from 'uniforms-bootstrap4';

// A compatible schema
import SurveySchema from './../imports/schemas/survey_schema';

// This will render an automatic, validated form, with labelled fields, inline
// validation and a submit button. If model will be present, form will be filled
// with appropriate values.
const PostForm = ({model}) =>{
    <AutoForm schema={SurveySchema} onSubmit={doc => db.save(doc)} model={model} />
};