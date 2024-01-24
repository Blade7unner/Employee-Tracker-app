INSERT INTO department (name) VALUES ('Human Resources'), ('Sales'), ('Engineering'), ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES 
('HR Manager', 65000.00, 1),
('Sales Representative', 50000.00, 2),
('Software Engineer', 85000.00, 3),
('Marketing Coordinator', 60000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL), -- Assuming the 'HR Manager' role has an ID of 1
('Jane', 'Smith', 2, NULL), -- Assuming 'Sales Representative' has an ID of 2
('Emily', 'Johnson', 3, 1), -- Assuming 'Software Engineer' has an ID of 3 and reports to John Doe
('Mike', 'Brown', 4, 1); -- Assuming 'Marketing Coordinator' has an ID of 4 and reports to John Doe
