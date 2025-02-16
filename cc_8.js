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

//Task 2: Function Expression

//Declare a function expression to determine the final price
let calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
};

//Test the data
calculateDiscount(100, 0.2);
calculateDiscount(250, 0.15);

//Task 3: Arrow Function

//Write an arrow function that applies a fee
let calculateServiceFee = (amount, serviceType) => {
    let rates = {
        "Premium": 0.15,
        "Standard": 0.10,
        "Basic": 0.05
    };
    let fee = amount * (rates[serviceType]);
    console.log(`Service Fee: $${fee.toFixed(2)}`);
};

//Test the data
calculateServiceFee(200, "Premium");
calculateServiceFee(500, "Standard");