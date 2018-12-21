import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
export const Tasks = new Mongo.Collection('tasks');

const Schemas = {};

Schemas.Task = new SimpleSchema({
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
})
Tasks.attachSchema(Schemas.Task);