import inquirer from 'inquirer';
import { queryDB } from './connection.js'
import { getRoles } from  './roles.js'
import { getDepartments } from './departments.js';


const viewAllEmployees = async () => {
    const employees = await queryDB
    (`SELECT e.id AS employee_id, 
        e.first_name AS employee_first_name, 
        e.last_name AS employee_last_name, 
        r.title as role_title, 
        d.department_name AS department_name, 
        r.salary AS role_salary, 
        COALESCE(m.first_name || ' ' || m.last_name, 'No Manager') AS manager_name
        FROM
        employee e
        JOIN
        roles r ON e.role_id = r.id
        JOIN
        department d ON r.department_id = d.id
        LEFT JOIN
        employee m ON e.manager_id = m.id
        ORDER BY
        e.id;
        
        `);
    console.table(employees);

};

const getEmployees = async () => {
    const employees = await queryDB(`SELECT id, first_name, last_name FROM  employee`);
    return employees.map((employee: { first_name: any; last_name: any; id: any; }) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value:  employee.id,

    }))

}

const addEmployee = async () => {
    const departments = await getDepartments();
    const {first_name, last_name,  department_id} = await inquirer.prompt([
    {
        type: 'input',
        name: 'first_name',
        message: 'Enter first name of employee:'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Enter last name of employee:'
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'Select department for employee:',
        choices: departments
    }
])

const role = await getRoles(department_id);
const employees = await getEmployees();

employees.unshift({name: 'None', value: null})

const {role_id,  manager_id} = await inquirer.prompt([
    {
        type: 'list',
        name: 'role_id',
        message: 'Select role for employee:',
        choices: role
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Select manager for employee:',
        choices: employees
    }
])

await queryDB('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',  [first_name, last_name, role_id, manager_id])
console.log(`Employee ${first_name} ${last_name} added successfully`)

}

export {viewAllEmployees, addEmployee}
