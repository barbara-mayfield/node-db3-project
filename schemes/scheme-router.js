const express = require('express');
const stepRouter = require('./steps/step-router');
const schemeModel = require('./scheme-model.js');

const router = express.Router();

router.use("/:id/steps", stepRouter)

router.get('/', async (req, res, next) => {
  try {
    res.json(await schemeModel.find());
  } catch(err) {
    next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
  const { id } = req.params;
  const scheme = await schemeModel.findById(id)

    if (scheme) {
      res.json(scheme);
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  } catch(err) {
    next(err)
  }
});

router.post('/', (req, res) => {
  const schemeData = req.body;

  schemeModel.add(schemeData)
  .then(scheme => {
    res.status(201).json(scheme);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new scheme' });
  });
});

router.post('/:id/steps', async (req, res, next) => {
  try { 
  const stepData = req.body;
  const { id } = req.params; 

  schemeModel.findById(id)
  const updatedPost = await schemeModel.addStep(stepData, id)
  
  if (updatedPost) {
        res.status(201).json(step);
  } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
  }

  } catch (err) {
    next(err)
  };
});

router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const payload = {
        scheme_name: req.body.scheme_name
    }

    schemeModel.findById(id)

    if (schemeModel) {
      schemeModel.update(changes, id)
      .then(updatedScheme => {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }

    await db("schemes").where("id", req.params.id).update(payload)
    res.json(changes)
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  schemeModel.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  });
});

module.exports = router;