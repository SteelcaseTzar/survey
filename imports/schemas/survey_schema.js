import SimpleSchema2Bridge from 'uniforms/SimpleSchema2Bridge';
export const SurveySchema = new SimpleSchema({
    // ...

    firstName: {
        type: String,
        uniforms: "First Name",
        max: 200
      },
      lastName: {
        type: String,
        uniforms: "Last Name"
      },
      jobTitle: {
        type: String,
        uniforms: "Job Title"
      },
      Gender: {
        type: String,
        uniforms: "Gender"
      },
      hireDate: {
        type: Date,
        uniforms: "Hire Date",
        optional: true
      },
      hoursWorked: {
        type: Number,
        uniforms: "Hours Worked on the Day of the Injury."
      },
      shift: {
        type: String,
        uniforms: "Shift"
      },
      birthDate: {
        type: Date,
        uniforms: "Date if Birth"
      },
      timeJob: {
        type: String,
        uniforms: "How Long Have You been in your current Job Position"
      },
      employeeID: {
        type: Number,
        uniforms: "Employee ID"
      },
      areaCode: {
        type: Number,
        uniforms: "Area Code"
      },
      leaderName: {
        type: String,
        uniforms: "Zone Leader Name"
      },
      phoneNumber: {
        type: String,
        uniforms: "Phone Number"
      },
      witnessNames: {
        type: String,
        uniforms: "Witness Names"
      },
      reportedDate: {
        type: Date,
        uniforms: "Date Reported to Company"
      },
      injuryDate: {
        type: Date,
        uniforms: "Date Injury Occured"
      },
      personReported: {
        type: String,
        uniforms: "To who was the accident reported?"
      },
      lastName: {
        type: String,
        uniforms: "Time of Day that Accident Took Place"
      },
      accidentLocation: {
        type: String,
        uniforms: "Location of Where Accident Happened"
      },
      workDescription: {
        type: String,
        uniforms: "Work Description(What does your job entail?)",
        optional: true,
        max: 1000
      },
      situationDescription: {
        type: String,
        uniforms: "Describe Situation(what happened/how this occured?)",
        optional: true,
        max: 1000
      },
      affectedBodyParts: {
        type: String,
        uniforms: "Affected Body Part('s):",
        optional: true,
        max: 1000
      },
      treatmentDone: {
        type: String,
        uniforms: "Treatment Done",
        optional: true,
        max: 1000
      }
});
