import express from "express";
import { updatedUser,deleteUser,getAllUser,getSingleUser } from "../Controllers/userController.js";

const router = express.Router();

router.get('/',getAllUser);
router.get('/:id',getSingleUser);
router.delete('/:id',deleteUser);
router.patch('/:id',updatedUser)
export default router;