const express = require('express');
const path = require('path');
const cors = require('cors');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

// ======================= MODEL =======================
let db;
const dbPath = path.join(__dirname, 'database.db');

const initializeDb = async () => {
  db = await open({ filename: dbPath, driver: sqlite3.Database });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      due_date TEXT,
      status TEXT DEFAULT 'Pending',
      remarks TEXT,
      created_by_name TEXT,
      created_by_id INTEGER,
      updated_by_name TEXT,
      updated_by_id INTEGER,
      created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('Database initialized');
};

// ===================== CONTROLLER =====================
const taskController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await db.all(`SELECT * FROM tasks`);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getTaskById: async (req, res) => {
    try {
      const task = await db.get(`SELECT * FROM tasks WHERE id = ?`, [req.params.taskId]);
      if (task) res.status(200).json(task);
      else res.status(404).json({ error: 'Task not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

createTask: async (req, res) => {
  const {
    title, description, due_date, status = 'Pending',
    remarks, created_by_name, created_by_id,
    updated_by_name, updated_by_id
  } = req.body;
  try {
    const result = await db.run(
      `INSERT INTO tasks 
      (title, description, due_date, status, remarks,
      created_by_name, created_by_id, updated_by_name, updated_by_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, description, due_date, status, remarks,
       created_by_name, created_by_id, updated_by_name, updated_by_id]
    );
    res.status(201).json({ taskId: result.lastID });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},



updateTask: async (req, res) => {
  const { taskId } = req.params;
  const {
    title, description, due_date, status,
    remarks, updated_by_name, updated_by_id
  } = req.body;

  try {
    const result = await db.run(
      `UPDATE tasks SET 
        title = ?, description = ?, due_date = ?, status = ?, 
        remarks = ?, updated_by_name = ?, updated_by_id = ?, 
        updated_on = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [title, description, due_date, status, remarks, updated_by_name, updated_by_id, taskId]
    );
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},



  deleteTask: async (req, res) => {
    try {
      await db.run(`DELETE FROM tasks WHERE id = ?`, [req.params.taskId]);
      res.send('Task deleted successfully');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// ======================== ROUTES ========================
app.get('/tasks', taskController.getAllTasks);
app.get('/tasks/:taskId', taskController.getTaskById);
app.post('/tasks', taskController.createTask);
app.put('/tasks/:taskId', taskController.updateTask);
app.delete('/tasks/:taskId', taskController.deleteTask);

// ====================== SERVER INIT ======================
const PORT = process.env.PORT || 3000;
initializeDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => {
  console.error('Error starting server:', err);
});
