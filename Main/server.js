// server.js

// Import necessary Node.js modules
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Set up your database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username,
    password: 'yourMySQLpassword', // your MySQL password
    database: 'employee_tracker'
});

// Connect to the database
db.connect(err => {
    if (err) throw err;
    console.log('Connected to the Employee Tracker database.');
    runApp(); // Start the application after connecting to the database
});

// Function to start the application
function runApp() {
    // Display the main menu using inquirer
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'View All Departments',
            'View All Roles',
            'Add an Employee',
            'Add a Department',
            'Add a Role',
            'Update Employee Role',
            'Exit'
        ]
    })
    .then(answer => {
        // Handle the user's choice
        switch (answer.action) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            // Add cases for each menu option
            case 'Exit':
                db.end();
                console.log('Goodbye!');
                break;
            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
        }
    });
}

// Example function to view all employees
function viewAllEmployees() {
    // Perform database query to get all employees
    const query = `SELECT * FROM employee`;
    db.query(query, (err, res) => {
        if (err) throw err;
        // Display the query results to the user
        console.table(res);
        // Go back to the main menu
        runApp();
    });
}

// Add similar functions for viewing departments, roles, adding new records, etc.

// Start the application
runApp();
