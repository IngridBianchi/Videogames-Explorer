// api/src/routes/test.js

const { Router } = require('express');
const { Test } = require('../db');

const router = Router();

// GET /test - obtener todos los tests
router.get('/', async (req, res) => {
  try {
    const tests = await Test.findAll();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los datos de prueba' });
  }
});

// POST /test - crear un nuevo test
router.post('/', async (req, res) => {
  const { name, isActive } = req.body;
  try {
    const nuevo = await Test.create({ name, isActive });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear el test' });
  }
});

module.exports = router;
