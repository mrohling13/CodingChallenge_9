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

// Task 2: Creating a Manager Class (Inheritance & Method Overriding)

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); 
        this.teamSize = teamSize; // Manager's team size
    }; 
    getDetails() {
        return `Manager: ${this.name}, Id: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
    } // manager details
    calculateBonus() {
        return this.salary * 12 * 0.10; // calculate bonus
    }
    // Task 4 modification
    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus();
    }
}; // manager class

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // new manager
console.log(mgr1.getDetails()); // Print manager details
console.log(mgr1.calculateBonus()); // Print manager bonus

