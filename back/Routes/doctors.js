import express from 'express';
import {
    deleteDoctor,
    getSingleDoctor,
    getAllDoctor,
    updatedDoctor
} from '../Controllers/doctorController.js';

import { authenticate, restrict } from '../Auth/verifyToken.js';
;
const  router=express.Router();
router.get("/:id",getSingleDoctor);
router.get('/',getAllDoctor)
router.patch("/:id",authenticate,restrict(['doctor']),updatedDoctor)
router.delete('/:id',authenticate,restrict(['doctor']),deleteDoctor)

export default router;