import express from "express";
import { updatedUser,deleteUser,getAllUser,getSingleUser } from "../Controllers/userController.js";
import { authenticate, restrict } from "../Auth/verifyToken.js";
const router = express.Router();

router.get('/',authenticate,restrict(['patient']),getAllUser);
router.get('/:id',authenticate,restrict(['patient']),getSingleUser);
router.patch('/:id',authenticate,restrict(['patient']),updatedUser)
router.delete('/:id',authenticate,restrict(['patient']),deleteUser)
export default router;