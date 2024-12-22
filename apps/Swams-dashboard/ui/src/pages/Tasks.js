import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const initialTasks = [
  { id: 1, task: 'Fix plumbing', employee: 'John Doe', building: 'Building A', priority: 'Urgent' },
  { id: 2, task: 'Electrical maintenance', employee: 'Jane Smith', building: 'Building B', priority: 'Not Urgent' },
];

const TaskManagement = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ task: '', employee: '', building: '', priority: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setNewTask({ task: '', employee: '', building: '', priority: '' });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Task Management
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Task"
          name="task"
          value={newTask.task}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Employee"
          name="employee"
          value={newTask.employee}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Building"
          name="building"
          value={newTask.building}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Priority</InputLabel>
          <Select
            name="priority"
            value={newTask.priority}
            onChange={handleInputChange}
          >
            <MenuItem value="Urgent">Urgent</MenuItem>
            <MenuItem value="Not Urgent">Not Urgent</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </form>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Employee</TableCell>
              <TableCell>Building</TableCell>
              <TableCell>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.task}</TableCell>
                <TableCell>{task.employee}</TableCell>
                <TableCell>{task.building}</TableCell>
                <TableCell>{task.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TaskManagement;