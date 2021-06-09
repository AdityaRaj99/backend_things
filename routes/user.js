import express from 'express';

import {getUsers, saveUser,getUserByID,deleteByID,updateUser,getUsersByAge} from '../controller/user.js';

const router=express.Router();

router.get("/",getUsers)
router.get("/:id",getUserByID)
router.post("/",saveUser)
router.delete("/:id", deleteByID)
router.put("/:id",updateUser)
// router.put("/:id",updateByID)
// router.get("/age",getUsersByAge)

export default router;