import express from 'express'
import { saveRegisterData,saveloginData } from '../controller/login-controller.js';

const router = express.Router();

router.post('/save', saveRegisterData);
router.post('/login', saveloginData);

export default router;

