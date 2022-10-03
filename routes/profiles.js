import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET /profiles
router.get('/', profilesCtrl.index)

// GET /profiles/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)

// POST /profiles/:id/details
router.post('/:id/details', isLoggedIn, profilesCtrl.details)

export {
  router
}