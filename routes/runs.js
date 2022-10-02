import { Router } from 'express'
import * as runsCtrl from '../controllers/runs.js'

const router = Router()

// GET /schedules
router.get('/', runsCtrl.index)

export {
  router
}