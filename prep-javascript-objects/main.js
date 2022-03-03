var person = {
  firstName: 'Jimmy',
  lastName: 'Neutron',
  hobby: 'Brain Blast'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'boy genius';
var job = person.job;
console.log("This person's current job is: " + job);

person.previousJob = 'student';
var previousJob = person.previousJob;
console.log("This person's previous job is: " + previousJob);

console.log(person);
