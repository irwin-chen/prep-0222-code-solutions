function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum: ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('World!');
console.log('greeting: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var result = addAndMultiplyBy5(10, 5);
console.log('result: ', result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var result2 = multiplyAndDivideBy5(35, 10);
console.log('result2: ', result2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(22, 7);
console.log('subtract: ', subtract);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

var circumference = getCircleCircumference(5);
console.log('circumference: ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('full name: ', fullName);

function cube(number) {
  return number * number * number;
}

var cubed = cube(5);
console.log('cube: ', cubed);
