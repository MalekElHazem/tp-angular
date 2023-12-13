// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// server.js

// ... existing code ...

let employees = [
    { id: 1, name: 'Employee 1' },
    { id: 2, name: 'Employee 2' },
  ];
  
  app.get('/api/employees', (req, res) => {
    res.json(employees);
  });
  
  app.post('/api/employees', (req, res) => {
    const newEmployee = req.body;
    newEmployee.id = employees.length + 1;
    employees.push(newEmployee);
    res.json(newEmployee);
  });
  
  app.put('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id);
    const updatedEmployee = req.body;
  
    employees = employees.map(employee => (employee.id === employeeId ? updatedEmployee : employee));
  
    res.json(updatedEmployee);
  });
  
  app.delete('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id);
    employees = employees.filter(employee => employee.id !== employeeId);
    res.json({ message: 'Employee deleted successfully' });
  });
  
  // ... existing code ...
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
