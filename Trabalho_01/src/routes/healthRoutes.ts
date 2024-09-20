import express from 'express'
import {resultCheck} from '../controllers/healthCheckController'

const router = express.Router()

router.get('/healthcheck', resultCheck)

export default router