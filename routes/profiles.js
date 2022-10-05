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

// GET /profiles/:id/stats
router.get('/:id/stats', isLoggedIn, profilesCtrl.statsIndex)

// GET /profiles/:id/goals
router.get('/:id/goals', isLoggedIn, profilesCtrl.goalsIndex)

// POST /profiles/:id/stats
router.post('/:id/stats', isLoggedIn, profilesCtrl.createStat)

// POST /profiles/:id/goals
router.post('/:id/goals', isLoggedIn, profilesCtrl.createGoal)

// DELETE /profiles/:id
// router.delete('/:id', isLoggedIn, profilesCtrl.deleteProfile)

// DELETE /profiles/:id/notes/:statId
router.delete('/:profileId/stats/:statId', profilesCtrl.deleteStat)

// DELETE /profiles/:id/notes/:goalId
router.delete('/:profileId/goals/:goalId', profilesCtrl.deleteGoal)

// PUT /profiles/:id
router.put('/:id', profilesCtrl.update)

export {
  router
}