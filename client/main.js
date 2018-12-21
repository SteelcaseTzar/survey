import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleSchema from 'simpl-schema';
import {AutoForm} from 'uniforms-semantic'
import {Tasks} from './../imports/api/tasks'
import SimpleSchema2Bridge    from 'uniforms/SimpleSchema2Bridge';


export default class UniformsHello extends Component {
  render() {

    return (
      <template name='uniforms'>
      <div>
      {{> quickForm collection="Tasks" id="insertTaskForm" tye="insert" class="new-task-form"}}
       </div>
       </template>
    )
  }
}

Meteor.startup( ()=> {
  render(<UniformsHello/>, document.getElementById('uniforms'))
});

export const SurveySchema = new SimpleSchema({
  // ...

  firstName: {
      type: String,

      max: 200
    },
    lastName: {
      type: String
       
    },
    jobTitle: {
      type: String
      
    },
    Gender: {
      type: String
       
    },
    hireDate: {
      type: Date,
   
      optional: true
    },
    hoursWorked: {
      type: Number
      
    },
    shift: {
      type: String
       
    },
    birthDate: {
      type: Date
       
    },
    timeJob: {
      type: String
       
    },
    employeeID: {
      type: Number
       
    },
    areaCode: {
      type: Number
       
    },
    leaderName: {
      type: String
       
    },
    phoneNumber: {
      type: String
       
    },
    witnessNames: {
      type: String
       
    },
    reportedDate: {
      type: Date
       
    },
    injuryDate: {
      type: Date
    
    },
    personReported: {
      type: String
    
    },
    lastName: {
      type: String
       
    },
    accidentLocation: {
      type: String
       
    },
    workDescription: {
      type: String,
    
      optional: true,
      max: 1000
    },
    situationDescription: {
      type: String,
     
      optional: true,
      max: 1000
    },
    affectedBodyParts: {
      type: String,
      
      optional: true,
      max: 1000
    },
    treatmentDone: {
      type: String,
      
      optional: true,
      max: 1000
    }
});

