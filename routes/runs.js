import { Router } from 'express'
import * as runsCtrl from '../controllers/runs.js'

const router = Router()

// GET /runs
router.get('/', runsCtrl.index)

// GET /runs/new
router.get('/new', runsCtrl.new)

// POST /runs
router.post('/', runsCtrl.create)

export {
  router
}