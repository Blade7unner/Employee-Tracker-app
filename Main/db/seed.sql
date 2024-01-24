INSERT INTO department (name) VALUES ('Human Resources'), ('Sales'), ('Engineering'), ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES 
('HR Manager', 65000.00, 1),
('Sales Representative', 50000.00, 2),
('Software Engineer', 85000.00, 3),
('Marketing Coordinator', 60000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL), 
('Jane', 'Smith', 2, NULL), 
('Emily', 'Johnson', 3, 1), 
('Mike', 'Brown', 4, 1); 
