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

//Task 4: Parameters and Arguments

//Write a function that calculates rental costs
function calculateRentalCost(days, carType, insurance = false) {
    let rates = {
        "Economy": 40,
        "Standard": 60,
        "Luxury": 100
    };
    let carRate = rates[carType];
    let insuranceCost = insurance ? 20 * days : 0;
    let totalCost = (carRate * days) + insuranceCost;
    console.log(`Total Rental Cost: $${totalCost}`);    
};

//Test the data
calculateRentalCost(3, "Economy", true);
calculateRentalCost(5, "Luxury", false);

//Task 5: Returning Values

//Write a function that returns total loan payment
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
};

//Test the data
calculateLoanPayment(1000, 0.05, 2);
calculateLoanPayment(5000, 0.07, 3);

//Task 6: Higher-Order Functions

//Declare an array with at least five values
let transactions = [200, 1500, 3200, 800, 2500];

//Write a high-order function to find transactions above $1000
let filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};

//Log to the console and test data
console.log(filterLargeTransactions(transactions, amount => amount > 1000));

//Task 7: Closures

//Write a function that returns another function to add items and maintain a running total
function createCartTracker() {
    let total = 0;
    return function(amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
};

//Log to the console and test data
let cart = createCartTracker();
console.log(cart(20));
console.log(cart(35));

