const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/users', (req, res) => res.json([]));
app.get('/api/users/:id', (req, res) => res.json({ id: req.params.id }));
app.post('/api/orders', (req, res) => res.status(201).json(req.body));
app.listen(3000);
