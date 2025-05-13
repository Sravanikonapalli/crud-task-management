# Task Management Application

A full-stack Task Management app using **MVC architecture**. Users can **Create**, **Read**, **Update**, **Delete**, and **Search** tasks. Built with **React.js** (frontend), **Node.js + Express** (backend), and **SQLite** (database).

---
## Objective

- Full-stack (Frontend + Backend)
- MVC architecture
- SQLite database integration
- RESTful API
- CRUD + Search for tasks
- Deployment-ready & documented

---

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: SQLite
- Styling: CSS
- Deployment: Render (Backend), Vercel (Frontend)

---

## Database Design

**`tasks` Table (SQLite):**

| #  | Column Name       | Type     | Required | Default                        |
|----|-------------------|----------|----------|--------------------------------|
| 0  | id                | INTEGER  | Yes      | Auto Increment (PK)            |
| 1  | title             | TEXT     | Yes      | -                              |
| 2  | description       | TEXT     | No       | -                              |
| 3  | due_date          | TEXT     | No       | -                              |
| 4  | status            | TEXT     | No       | 'Pending'                      |
| 5  | remarks           | TEXT     | No       | -                              |
| 6  | created_on        | TEXT     | No       | datetime('now', 'localtime')   |
| 7  | updated_on        | TEXT     | No       | datetime('now', 'localtime')   |
| 8  | created_by_name   | TEXT     | No       | -                              |
| 9  | created_by_id     | INTEGER  | No       | -                              |
| 10 | updated_by_name   | TEXT     | No       | -                              |
| 11 | updated_by_id     | INTEGER  | No       | -                              |

Sample data: `sampledata.sql`

---

## Project Setup

### Backend

1. Go to backend folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start server:
    ```bash
    node server.js
    ```
    Backend URL: https://crud-task-management.onrender.com

### Frontend

1. Go to frontend folder:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start dev server:
    ```bash
    npm start
    ```
    Frontend URL: [https://crud-task-management.vercel.app/]

---

## Features

- Task Creation
- Task Listing
- Task Updating
- Task Deletion
- Task Searching
- Due Date & Status Management
- User Info (Created/Updated by)
- Responsive Design

---

## Documentation Includes

- Project Overview
- Database Design
- Backend & Frontend Structure
- Setup Instructions
- Testing Steps
- Deployment Details
- Demo Link

---

## Deployment

- Backend: [backend live](https://crud-task-management.onrender.com)
- Frontend: [frontend live link](https://crud-task-management.vercel.app/)

---

## Demo Video

- [demo](https://drive.google.com/file/d/1KydOTxrKUsvSMVuQxkOY7T8vQiDnicWx/view?usp=sharing)
---

## GitHub Repository

[github link](https://github.com/Sravanikonapalli/crud-task-management)