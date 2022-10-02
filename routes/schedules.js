import { Router } from 'express'
import * as scheduleCtrl from '../controllers/schedules.js'

const router = Router()

// GET /schedules
router.get('/', scheduleCtrl.index)

// GET /schedules/sunday
router.get('/sunday', scheduleCtrl.sunday)

// GET /schedules/monday
router.get('/monday', scheduleCtrl.monday)

// GET /schedules/tuesday
router.get('/tuesday', scheduleCtrl.tuesday)

// GET /schedules/wednesday
router.get('/wednesday', scheduleCtrl.wednesday)

// GET /schedules/thursday
router.get('/thursday', scheduleCtrl.thursday)

// GET /schedules/friday
router.get('/friday', scheduleCtrl.friday)

// GET /schedules/saturday
router.get('/saturday', scheduleCtrl.saturday)

export {
  router
}