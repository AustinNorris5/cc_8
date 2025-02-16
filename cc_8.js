//Task 1: Function Declaration

//Write a function that computes the net salary
function calculateSalary(baseSalary, bonus, taxRate) {
    let taxAmount = baseSalary * taxRate;
    let netSalary = (baseSalary + bonus) - taxAmount;
    return `Net Salary: $${netSalary.toFixed(2)}`;
};

//Log to the console and test data
console.log(calculateSalary(5000, 500, 0.1));
console.log(calculateSalary(7000, 1000, 0.15));