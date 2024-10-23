import inquirer from 'inquirer';
import { queryDB } from './connection.js';
const viewAllDepartments = async () => {
    const departments = await queryDB('SELECT * FROM department');
    console.table(departments);
};
const addDepartment = async () => {
    const { department_name } = await inquirer.prompt({
        type: 'input',
        name: 'department_name',
        message: 'Enter the name of the new department',
    });
    await queryDB(`INSERT INTO department (department_name) VALUES ($1)`, [department_name]);
    console.log(`Department ${department_name} added successfully`);
};
const getDepartments = async () => {
    const departments = await queryDB('SELECT id,  department_name FROM department');
    return departments.map((department) => ({ name: department.department_name, value: department.id }));
};
export { viewAllDepartments, addDepartment, getDepartments };
