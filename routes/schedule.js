import { Router } from 'express'
import * as scheduleCtrl from '../controllers/schedule.js'

const router = Router()

// GET /schedule
router.get('/', scheduleCtrl.index)

// GET /schedule/sunday
router.get('/sunday', scheduleCtrl.sunday)

// GET /schedule/monday
router.get('/monday', scheduleCtrl.monday)

// GET /schedule/tuesday
router.get('/tuesday', scheduleCtrl.tuesday)

// GET /schedule/wednesday
router.get('/wednesday', scheduleCtrl.wednesday)

// GET /schedule/thursday
router.get('/thursday', scheduleCtrl.thursday)

// GET /schedule/friday
router.get('/friday', scheduleCtrl.friday)

// GET /schedule/saturday
router.get('/saturday', scheduleCtrl.saturday)

export {
  router
}