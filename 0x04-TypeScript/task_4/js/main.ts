// Constants for subjects
const CPP_SUBJECT = 'Cpp';
const JAVA_SUBJECT = 'Java';
const REACT_SUBJECT = 'React';

// Teacher object
const cTeacher = {
  experienceTeachingC: 10
};

// Functions for each subject
function logSubjectInfo(subject, teacher) {
  console.log(subject);
  teacher = teacher || cTeacher; // Default to cTeacher if no teacher is provided
  console.log("Requirements:", getRequirements(subject));
  console.log("Available Teacher:", getAvailableTeacher(subject, teacher));
}

function getRequirements(subject) {
  // Define requirements based on subject
  switch (subject) {
    case CPP_SUBJECT:
      return "C++ requirements";
    case JAVA_SUBJECT:
      return "Java requirements";
    case REACT_SUBJECT:
      return "React requirements";
    default:
      return "Unknown subject";
  }
}

function getAvailableTeacher(subject, teacher) {
  // Check if teacher can teach the subject
  if (subject === CPP_SUBJECT && teacher.experienceTeachingC >= 10) {
    return "Yes";
  } else {
    return "No";
  }
}

// Logging for each subject
logSubjectInfo(CPP_SUBJECT);
logSubjectInfo(JAVA_SUBJECT);
logSubjectInfo(REACT_SUBJECT);
