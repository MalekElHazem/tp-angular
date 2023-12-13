const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Your CRUD routes go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const employees = [];
let nextId = 1;

// Create
app.post('/api/employees', (req, res) => {
  const employee = req.body;
  employee.id = nextId++;
  employees.push(employee);
  res.json(employee);
});

// Read
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// Update
app.put('/api/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedEmployee = req.body;

  const index = employees.findIndex(employee => employee.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedEmployee };
    res.json(employees[index]);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

// Delete
app.delete('/api/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = employees.findIndex(employee => employee.id === id);

  if (index !== -1) {
    const deletedEmployee = employees.splice(index, 1)[0];
    res.json(deletedEmployee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});
