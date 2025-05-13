import React, { useState, useEffect } from 'react';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async (task) => {
    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        await fetchTasks();
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTask = async (task) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        await fetchTasks();
        setEditTask(null);
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:3000/tasks/${taskId}`, { method: 'DELETE' });
      await fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setShowForm(true);
  };

  const handleSaveTask = (task) => {
    if (task.id) {
      handleUpdateTask(task);
    } else {
      handleCreateTask(task);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleNewTaskClick = () => {
  setEditTask(null);
  setShowForm(true);
};

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <SearchBar onSearch={handleSearch} />
      <button onClick={handleNewTaskClick}>New Task</button>
      {showForm && (
        <TaskForm
          task={editTask}
          onSave={handleSaveTask}
          onCancel={() => setShowForm(false)}
        />
      )}
      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))
        ) : (
          <p>No tasks found</p>
        )}
      </div>
    </div>
  );
};

export default App;
