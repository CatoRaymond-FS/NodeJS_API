//use axios 
const axios = require('axios');
require('dotenv').config();

//CREATE FUNCTION TO GET TODO
const todoService = async () => {
    console.log("Real Todos");
    return await axios.get(`$process.env.todosUrl`);
};

const todoServiceById = async (id) => {
    console.log("Real Todos");
    return await axios.get(`$process.env.todosUrl${id}`);
};
module.exports = {todoService, todoServiceById};