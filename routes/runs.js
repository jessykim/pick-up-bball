import { Router } from 'express'
import * as runsCtrl from '../controllers/runs.js'

const router = Router()

// GET /runs
router.get('/', runsCtrl.index)

// GET /runs/new
router.get('/new', runsCtrl.new)

// GET /runs/:id
router.get('/:id', runsCtrl.show)

// GET /runs/:id/edit
router.get('/:id/edit', runsCtrl.edit)

// POST /runs
router.post('/', runsCtrl.create)

// POST /runs/:id/profiles
router.post('/:id/profiles', runsCtrl.addProfiles)

// DELETE /runs/:_id
router.delete('/:id', runsCtrl.delete)

// PUT /runs/:id
router.put('/:id', runsCtrl.update)

export {
  router
}