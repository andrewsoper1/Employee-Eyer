import inquirer from  'inquirer';
import {queryDB} from './connection.js';
import {getDepartments} from  './departments.js';


const viewAllRoles = async () => {
    const roles = await queryDB('SELECT * FROM roles');
    console.table(roles);
}

const addRole = async () => {
    const departments = await getDepartments();
    const {title, salary, department_id}  = await inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the role:'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter the salary of the role:'
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'Please select the department ID',
        choices:  departments
    },
]);
await  queryDB(`INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`, [title,salary, department_id])
console.log(`Role ${title} added successfully `)

}

const getRoles = async (department_id: number) => {
    const roles = await queryDB('SELECT id, title FROM roles WHERE department_id = $1', [department_id]);
    return roles.map((roles: { title: any; id: any; }) => ({
        name: roles.title,
        value: roles.id
    }))

}



export {viewAllRoles,  addRole, getRoles};
