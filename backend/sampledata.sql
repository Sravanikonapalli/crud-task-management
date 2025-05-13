-- Sample Data Insertion

INSERT INTO tasks (title, description, due_date, status, remarks, created_by_name, created_by_id, updated_by_name, updated_by_id)
VALUES
('Task 1', 'Complete the project report', '2025-05-15', 'Pending', 'Urgent', 'John Doe', 1, 'Jane Smith', 2),
('Task 2', 'Prepare presentation for meeting', '2025-05-20', 'In Progress', 'Needs review', 'Alice Green', 3, 'John Doe', 1),
('Task 3', 'Design the UI for the new app', '2025-05-18', 'Completed', 'Final version ready', 'Bob White', 4, 'Alice Green', 3),
('Task 4', 'Update website content', '2025-05-22', 'Pending', 'Awaiting approval', 'Charlie Brown', 5, 'John Doe', 1),
('Task 5', 'Fix bugs in the backend system', '2025-05-12', 'In Progress', 'In testing phase', 'Diana Blue', 6, 'Jane Smith', 2),
('Task 6', 'Create new user profiles', '2025-05-19', 'Pending', 'To be assigned', 'Eve Black', 7, 'Charlie Brown', 5),
('Task 7', 'Implement search functionality', '2025-05-30', 'Pending', 'Waiting for API', 'Frank Yellow', 8, 'John Doe', 1);
