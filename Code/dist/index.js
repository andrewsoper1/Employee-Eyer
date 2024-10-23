import inquirer from 'inquirer';
import { connectDB, disconnectDB } from './connection.js';
import { viewAllEmployees, addEmployee } from './employees.js';
import { viewAllDepartments, addDepartment } from './departments.js';
import { viewAllRoles, addRole } from './roles.js';
const questions = async () => {
    await connectDB();
    while (true) {
        const { choices } = await inquirer.prompt({
            type: 'list',
            name: 'choices',
            message: 'Please select an option',
            choices: [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add a Department',
                'Add a Role',
                'Add a Employee',
                'Exit'
            ]
        });
        switch (choices) {
            case 'View all Departments':
                await viewAllDepartments();
                break;
            case 'View all Roles':
                await viewAllRoles();
                break;
            case 'View all Employees':
                await viewAllEmployees();
                break;
            case 'Add a Department':
                await addDepartment();
                break;
            case 'Add a Role':
                await addRole();
                break;
            case 'Add a Employee':
                await addEmployee();
                break;
            case 'Exit':
                await disconnectDB();
                return;
        }
    }
};
questions().catch(err => {
    console.log(err);
    disconnectDB();
});
