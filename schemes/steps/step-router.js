const express = require("express")
const stepModel = require("./step-model")

const router = express.Router({
    mergeParams: true,
})

router.get("/", async (req, res, next) => {
    try {
        const { id } = req.params
        const steps = await stepModel.findSteps(id)
        res.json(steps)
    } catch(err) {
        next(err)
    }
})

module.exports = router;