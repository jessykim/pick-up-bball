import { Router } from 'express'
import * as runsCtrl from '../controllers/runs.js'

const router = Router()

// GET /schedules
router.get('/', runCtrl.index)

export {
  router
}