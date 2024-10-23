INSERT INTO department (department_name)
VALUES ('Mergers and Acquisitions'),
       ('Corporate Finance'),
       ('Sales and Trading');

INSERT INTO roles (title, salary, department_id)
VALUES ('Vice President', 200000, 1),
       ('Vice Vice President', 150000, 1),
       ('Assistant Regional Manager', 125000, 2),
       ('Assistant to the Regional Manager', 100000, 2), 
       ('Senor Analyst 2', 80000, 3),
       ('Senor Analyst', 60000, 3);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Patrick', 'Bateman', 1, NULL),
       ('Timothy', 'Bryce', 3, NULL),
       ('dBrickashaw', 'Ferguson',5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
       ('Paul', 'Allen', 2, 1),
       ('Richard', 'Rooster',4, 3),
       ('HaHa', 'Clinton-Dix', 6, 5);


    

    
       

    