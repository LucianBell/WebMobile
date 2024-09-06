import express from 'express'   
import { deleteUsuario, getUsuario, getUsuarios, postUsuario } from '../controllers/usuario'

const router = express.Router()

router.post('/usuarios', postUsuario)
router.get('/usuarios', getUsuarios)
router.get('/usuarios/:id', getUsuario)
router.delete('/usuarios/:id', deleteUsuario)

export default router
