import { Router } from 'express'
import * as playersCtrl from '../controllers/players.js'

const router = Router()

// GET /players
router.get('/', playersCtrl.index)

export {
  router
}