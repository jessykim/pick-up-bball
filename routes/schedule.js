import { Router } from 'express'
import * as scheduleCtrl from '../controllers/schedule.js'

const router = Router()

// GET /days
router.get('/', scheduleCtrl.index)

export {
  router
}