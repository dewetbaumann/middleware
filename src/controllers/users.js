const { response } = require('express');
const { validationResult } = require('express-validator');


const getUsers = (req, res = response) => {
    const { email, password } = req.body;

    if (email == "test" && password == "test"){
        res.json({
            device_id: 111111,
            chofer_id: 222222,
            chofer_name: "Juan Perez",
            organization_id: 333333,
            organization_name: "Alta empresa papa Srl",
            token: "token"
        });
    }else{
        res.status(400).json({});
    }
}

const postUsers = async (req, res = response) => {
    const { email, password } = req.body;

        res.json({
            token: "",
            email,
            password
        });
}

const putUsers = async (req, res = response) => {

        res.json({
            message: 'POST API - Controller',
            body,
        });    
    
}

const deleteUsers = (req, res = response) => {
    res.json({
        message: 'DELETE API - Controller'
    });
}

const pathUsers =   (req, res = response) => {
    res.json({
        message: 'PATH API - Controller'
    });
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    pathUsers,
}