/*
  .....  YOUR MISSION  .....

  You are an HR manager and need a way to keep
  track of employees, which department they work
  in, and other staistical information. You need
  to build a simple JavaScript program that...

  1. Defines a Company, a Department, a Manager,
      and an Employee.

  2. When a Company object is created, you must
      be able to specify the name of the company

  3. When a Department object is created, you must
      be able to specify the name of the department.

  4. When a Manager object is created, you must
      be able to specify the following traits
        a. First name
        b. Last name

  5. When an Employee object is created, you must
      be able to specify the following traits
        a. First name
        b. Last name
        c. Age
        d. Marital status
        e. Salary
      Also, modify the Employee prototype to add the
      following methods (one example given):
        a. setDepartment - Override the default department
        b. getHourlyWage - This should return the hourly
                           rate for the annual salary
        c. setManager - Assign a Manager to an employee


  5. Employee must inherit from Department properties
  6. Manager must inherit Department properties
  7. Department must inherit Company properties
  8. Create a global variable that holds your name and have
      each type of object have a property named `creator`
      with the value of that variable.

*/

var creator = "Steve";

// Define the Company function

var creator = "Chris";

function Company (name) {
  this.company = name;
  this.creator = creator;
}

// Define the Department function
function Department (name) {
  this.department = name;
}
Department.prototype = new Company("Lonely Planet");

Department.prototype = new Company("Generic");
// console.log(this.department); /* ??? */

// Define the Manager function
<<<<<<< HEAD
function Manager (first, lastName){
  this.first = first;
  this.last = lastName;
}

=======
function Manager (first, last) {
  this.firstName = first;
  this.lastName = last;
}
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
Manager.prototype = new Department("Software");

// Define the Employee function.
function Employee (first, last, age, status, salary) {
<<<<<<< HEAD
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.status = status;
  this.salary = salary;

=======
  this.first = first;
  this.last = last;
  this.age = age;
  this.status = status;
  this.salary = salary;
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
}

Employee.prototype = new Department("Software");
// console.log (this.employee); /*my edit */

// You can add methods to an object's prototype (see usage below)
Employee.prototype.setDepartment = function (department) {

  // The department property gets inherited from the Department
  // object, but can be overriden at any time by each Employee
  this.department = department;
}
Employee.prototype.getHourlyWage= function () {
    return this.salary / 2080;

  // this.HourlyWage= department;
}
Employee.prototype.setManager = function (first, last) {


  this.Manager = new Manager(first, last);

}


Employee.prototype.getHourlyWage = function () {
  return parseInt(this.salary) / 2080;
}




Employee.prototype.setManager = function (first, last) {
  this.manager = new Manager(first, last);
}



var Steve = new Employee("Steve", "Brownlee", "Age", "Married", 1000000);

// Employee.prototype.setCreator = new Employee ("chris", "Jarvis", "age", "married", "50000");

// Change the department for an employee to override the default
Steve.setDepartment("Accounting");
<<<<<<< HEAD
Steve.setManager("sam", "smith");
Steve.setManager("Bat", "Man");

// Show the employee's properties
console.log(Steve);
console.log(Steve.getHourlyWage());


console.log(creator);
console.log(Steve.Manager);
=======
Steve.setManager("John", "Wark");
Steve.setManager("Dave", "Nolan");
Steve.setManager("Space", "Ghost");





// Show the employee's properties
console.log(Steve);









>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
