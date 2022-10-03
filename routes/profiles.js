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

// PUT /profiles/:id
router.put('/:id', profilesCtrl.update)

export {
  router
}