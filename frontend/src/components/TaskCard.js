import '../App.css'

const TaskCard = ({ task, onEdit, onDelete }) => {
  const handleDelete = (taskId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this task?');
    if (isConfirmed) {
      onDelete(taskId);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p><strong>Task Description:</strong> {task.description}</p>
      <p><strong>Due Date:</strong> {formatDate(task.due_date)}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Remarks:</strong> {task.remarks}</p>
      <p><strong>Created On:</strong> {formatDate(task.created_on)}</p>
      <p><strong>Last Updated On:</strong> {formatDate(task.updated_on)}</p>
      <p><strong>Created By:</strong> {task.created_by_name} (ID: {task.created_by_id})</p>
      <p><strong>Last Updated By:</strong> {task.updated_by_name} (ID: {task.updated_by_id})</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
};
export default TaskCard;