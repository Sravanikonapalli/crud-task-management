import React, { useState, useEffect } from 'react';
import '../App.css'
const TaskForm = ({ task, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    due_date: '',
    status: 'Pending',
    remarks: '',
    created_by_name: '',
    created_by_id: 1,
    updated_by_name: '',
    updated_by_id: 1,
  });

  useEffect(() => {
    if (task) {
      setFormData({
        ...task,
        updated_by_name: task.updated_by_name || task.created_by_name,
        updated_by_id: task.updated_by_id || task.created_by_id
      });
    }
  }, [task]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      title: '',
      description: '',
      due_date: '',
      status: 'Pending',
      remarks: '',
      created_by_name: '',
      created_by_id: 1,
      updated_by_name: '',
      updated_by_id: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{task ? 'Edit Task' : 'Create New Task'}</h2>
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleInputChange}></textarea>
      <input type="date" name="due_date" value={formData.due_date} onChange={handleInputChange} />
      <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleInputChange} />
      <textarea name="remarks" placeholder="Remarks" value={formData.remarks} onChange={handleInputChange}></textarea>
      <input type="text" name="created_by_name" placeholder="Created By" value={formData.created_by_name} onChange={handleInputChange} />
      <input type="text" name="updated_by_name" placeholder="Updated By" value={formData.updated_by_name} onChange={handleInputChange} />
      <div className='task-btns'>
        <button type="submit" className='submit-btn'>{task ? 'Update Task' : 'Create Task'}</button>
        <button type="button" className='cancel-btn task-form' onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default TaskForm;
