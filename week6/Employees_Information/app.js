const employees = [];

function Employee(name, jobtitle, salary, status = "Full Time") {
  this.name = name;
  this.jobtitle = jobtitle;
  this.salary = salary;
  this.status = status;
};
Employee.prototype.printEmployeeForm = function(){
    console.log(`
    Name: ${this.name},
    Job Title: ${this.jobtitle},
    Salary: ${this.salary},
    Status: ${this.status}`);
};

const peter = new Employee("Peter", "CEO", 300000);
const mike = new Employee("Mike", "Manager", 120000 );
const rick = new Employee("Rick", "Assistant Manager", 50000, "Part Time");

peter.printEmployeeForm();
mike.printEmployeeForm();
rick.printEmployeeForm();

function addEmployeeToArray(e) {
employees.push(e);
}
addEmployeeToArray(peter);
addEmployeeToArray(mike);
addEmployeeToArray(rick);

console.log(employees);