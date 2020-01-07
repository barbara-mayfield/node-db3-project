const db = require("../data/dbConfig.js")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first()
}

function findSteps(id) {
    return db("schemes as sc") 
        .join("steps as st", "sc.id", "st.scheme_id")
        .where({ scheme_id: id })
        .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
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