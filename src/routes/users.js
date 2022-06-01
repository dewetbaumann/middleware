const { Router } = require('express');
const { check } = require('express-validator');
const {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    pathUsers,
} = require('../controllers/users');

const router = Router();

router.get('/', getUsers);

router.post('/', postUsers);

router.put('/', putUsers);

router.patch('/', pathUsers);

router.delete('/', deleteUsers);

module.exports= router;