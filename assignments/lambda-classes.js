// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.speciality = props.speciality;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  changeGrade(grade) {
    return Math.floor(Math.random(grade) * 100);
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubject = props.favSubject;
    this.grade = props.grade;
  }
  listSubjects(favSubject) {
    return favSubject;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate(changeGrade) {
    if (changeGrade >= 70) {
      return "Yes!";
    } else {
      return "Nope";
    }
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClass = props.gradClass;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times`;
  }
  debugCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  catchPhrase: "Don't forget the homies"
});

const wilma = new Instructor({
  name: "Wilma",
  location: "Bedrock",
  age: 39,
  favLanguage: "CSS",
  catchPhrase: "There's no crying in CSS"
});

const pebbles = new Student({
  name: "Pebbles",
  previousBackground: "Dinorider",
  className: "Slate Rock and Gravel",
  favSubject: ["HTML", "CSS", "JavaScript"],
  grade: fred.changeGrade()
});

const bambam = new Student({
  name: "Bambam",
  previousBackground: "Rock Pounder",
  className: "Loyal Order of Water Buffalos",
  favSubject: ["HTML", "CSS", "JavaScript"],
  grade: fred.changeGrade()
});

const barney = new ProjectManager({
  name: "Barney",
  gradClass: "Amenable",
  favInstructor: "Fred"
});

const slate = new ProjectManager({
  name: "Mr. Slate",
  gradClass: "Baby T-Rex",
  favInstructor: "Rockhead Sylvester"
});

console.log(`/----------Instructors----------/`);
console.log(`Instructor ${fred.name}'s favorite language is ${fred.favLanguage}.`);
console.log(`Instructor ${wilma.name} likes to say: ${wilma.catchPhrase}`);
console.log(fred.demo("JavaScript"));
console.log(wilma.demo("CSS"));
console.log(fred.grade(bambam, bambam.favSubject[0]));
console.log(wilma.grade(pebbles, pebbles.favSubject[1]));
console.log(`/----------Students----------/`);
console.log(`${pebbles.name} used to be a ${pebbles.previousBackground}`);
console.log(`${bambam.name} is in the ${bambam.className}`);
console.log(pebbles.PRAssignment("Objects"));
console.log(bambam.sprintChallenge("Array methods"));
console.log(`/----------Program Managers----------/`);
console.log(`${barney.name} is from the ${barney.gradClass} class`);
console.log(`${slate.name}'s favorite instructor is ${slate.favInstructor}`);
console.log(barney.standUp("Yabba Dabba Do"));
console.log(slate.debugCode(pebbles.name, pebbles.favSubject[2]));
console.log(`/----------Stretch----------/`);
console.log(`Pebbles' grade: ${pebbles.grade}`);
console.log(`Does ${pebbles.name} graduate? ${pebbles.graduate(pebbles.grade)}`);
console.log(`Bambam's grade: ${bambam.grade}`);
console.log(`Does ${bambam.name} graduate? ${bambam.graduate(bambam.grade)}`);
