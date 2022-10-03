import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET /profiles
router.get('/', profilesCtrl.index)

// GET /profiles/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)

// GET /profiles/:id/edit
router.get('/:id/edit', isLoggedIn, profilesCtrl.edit)

// GET /profiles/:id/notes
router.get('/:id/notes', isLoggedIn, profilesCtrl.notesIndex)

// GET /profiles/:id/goals
router.get('/:id/goals', isLoggedIn, profilesCtrl.goalsIndex)

// POST /profiles/:id/notes
router.post('/:id/notes', isLoggedIn, profilesCtrl.createNote)

// POST /profiles/:id/goals
router.post('/:id/goals', isLoggedIn, profilesCtrl.createGoal)

// DELETE /profiles/:id/notes/:noteId
router.delete('/:profileId/notes/:noteId', profilesCtrl.deleteNote)

// DELETE /profiles/:id/notes/:goalId
router.delete('/:profileId/goals/:goalId', profilesCtrl.deleteGoal)

// PUT /profiles/:id
router.put('/:id', profilesCtrl.update)

export {
  router
}