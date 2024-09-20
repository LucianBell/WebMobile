import express from 'express'
import { getBand, getBands, postBand, deleteBand, updateBand } from '../controllers/bandControllers'

const router = express.Router()

router.get('/bands/', getBands)
router.get('/bands/:id', getBand)
router.post('/bands', postBand)
router.put('/bands/:id', updateBand)
router.delete('/bands/:id', deleteBand)

export default router
