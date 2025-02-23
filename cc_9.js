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

// Test for Task 1

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
    
    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus();
    }
}; // manager class

// Test for task 2

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // new manager
console.log(mgr1.getDetails()); // Print manager details
console.log(mgr1.calculateBonus()); // Print manager bonus

// Task 3: Creating a Company Class

class Company {
    constructor(name) {
        this.name = name; // Name of company
        this.employees = []; // Company employees
    };
    addEmployee(employee) {
        this.employees.push(employee); // Adds employee to the company
    }
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails())); // Lists all employees
    }
}
// Test for Task 3

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

// Task 4: Implementing a Payroll System
Company.prototype.calculateTotalPayroll = function () {
    return this.employees.reduce((total, employee) => {
        return total + (employee.calculateAnnualSalary() + (employee.calculateBonus ? employee.calculateBonus() : 0));
    }, 0);
};

// Test Case for Task 4
console.log(company.calculateTotalPayroll()); // Expected output: 165600

