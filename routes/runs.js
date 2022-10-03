import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as runsCtrl from '../controllers/runs.js'

const router = Router()

// GET /runs
router.get('/', runsCtrl.index)

// GET /runs/new
router.get('/new', isLoggedIn, runsCtrl.new)

// GET /runs/:id
router.get('/:id', isLoggedIn, runsCtrl.show)

// GET /runs/:id/edit
router.get('/:id/edit', isLoggedIn, runsCtrl.edit)

// POST /runs
router.post('/', isLoggedIn, runsCtrl.create)

// POST /runs/:id/profiles
router.post('/:id/profiles', isLoggedIn, runsCtrl.addProfiles)

// DELETE /runs/:_id
router.delete('/:id', isLoggedIn, runsCtrl.delete)

// DELETE /runs/:id/profiles/:profileId
router.delete('/:runId/profiles/:profileId', isLoggedIn, runsCtrl.deleteProfile)

// PUT /runs/:id
router.put('/:id', isLoggedIn, runsCtrl.update)

export {
  router
}