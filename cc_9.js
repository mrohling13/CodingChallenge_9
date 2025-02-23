// Task 1: Creating an Employee Class

class Employee {
    constructor(name, id, department,salary) {
        this.name = name; // Employee Name
        this.id = id; // Employee ID
        this.department = department; // Employee Department
        this.salary = salary; // Employee Salary
    };
    getDetails() {
            return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;   
    }; // Fetches Employee Details
    calculateAnnualSalary() {
        return this.salary * 12; // Returns Employee Salary
    }
};

const emp1 = new Employee("Alice Johnson", "101", "Sales", 5000); // Employee Entry
console.log(emp1.getDetails()); // Prints Employee Details

