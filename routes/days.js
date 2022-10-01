import { Router } from 'express'
import * as daysCtrl from '../controllers/days.js'

const router = Router()

// GET /days
router.get('/', daysCtrl.index)

export {
  router
}