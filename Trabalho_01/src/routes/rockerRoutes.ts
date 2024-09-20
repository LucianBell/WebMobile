import express from 'express'
import { deleteRocker, getRocker, getRockers, postRocker, updateRocker } from '../controllers/rockerControllers'

const router = express.Router()

router.get('/rocker', getRockers)
router.get('/rocker/:id', getRocker)
router.post('/rocker', postRocker)
router.put('/rocker/:id', updateRocker)
router.delete('/rocker/:id', deleteRocker)

export default router
