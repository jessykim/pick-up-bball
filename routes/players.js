import { Router } from 'express'
import * as playersCtrl from '../controllers/players.js'

const router = Router()

// GET /players/new
router.get('/new', playersCtrl.new)

export {
  router
}