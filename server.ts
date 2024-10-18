import inquirer from 'inquirer';

const startCli = (): void => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'Please select an option:',
            choices: [ 
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add a Department',
                'Add a Role',
                'Add a Employee',
                'Exit'
            ]

        }
    ])
    .then((answers) => {
        const {choices} = answers
        if (choices ===  'View all Departments') {
            viewAllDepartments();
        }  else if (choices ===  'View all Roles') {
            viewAllRoles();
        }  else if (choices ===  'View all Employees') {
            viewAllEmployees();
        }  else if (choices ===  'Add a Department') {
            addDepartment();
        }   else if (choices ===  'Add a Role') {
            addRole();
        } else if  (choices ===  'Add a Employee') {
            addEmployee();
        } else {

        }
    });
    






};

const viewAllDepartments = () => {
    const query =  `SELECT * FROM department`

}

const viewAllRoles = () => {
    const query = `SELECT * FROM role`
}

const viewAllEmployees = () => {
    const query =  `SELECT * FROM role`
                

}

