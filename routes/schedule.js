import { Router } from 'express'
import * as scheduleCtrl from '../controllers/schedule.js'

const router = Router()

// GET /schedule
router.get('/', scheduleCtrl.index)

// GET /schedule/sunday
router.get('/sunday', scheduleCtrl.indexSunday)

export {
  router
}