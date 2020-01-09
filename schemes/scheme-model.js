const db = require("../data/dbConfig.js")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first()
}

async function add(schemeData) {
    const [id] = await db("schemes").insert(schemeData)
	return db("schemes").where({ id }).first()
}

function update(id, changes) {
    db("schemes").where({id}).update(changes)
    .then((scheme) => {
        return findById(scheme)
    })
}

function remove(id) {
    return db('schemes').where({ id }).del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}