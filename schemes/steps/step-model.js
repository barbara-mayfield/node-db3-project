const db = require("../../data/dbConfig")

function findSteps(id) {
    return db("schemes as sc") 
        .join("steps as st", "sc.id", "st.scheme_id")
        .where({ scheme_id: id })
        .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
}

module.exports = {
    findSteps
}