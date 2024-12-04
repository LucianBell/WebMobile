import express from 'express'
import {healthCheck} from '../controllers/healthCheckController'

const router = express.Router()

router.get('/healthcheck', healthCheck)

export default router