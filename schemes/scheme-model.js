const db = require("../data/dbConfig.js")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first()
}

function findSteps() {
    
}

function add() {
    
}

function update() {
    
}

function remove() {
    
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}