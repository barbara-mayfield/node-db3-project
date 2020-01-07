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

async function add(schemeData) {
    const [id] = await db("schemes").insert(schemeData)
	return db("schemes").where({ id }).first()
}

function update() {
    
}

function remove(id) {
    return db('schemes').where({ id }).del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}