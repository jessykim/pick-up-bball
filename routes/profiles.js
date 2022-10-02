import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET /profiles
router.get('/', profilesCtrl.index)

export {
  router
}