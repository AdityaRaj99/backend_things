import express from 'express'
import {getTutorialByID,getAllTutorilasByTitle,createTutorial,deleteAllTutorials,deleteTutorialById} from "../controller/tutorial.js";

const router = express.Router()

router.get("/:id",getTutorialByID)
router.get("/",getAllTutorilasByTitle)
router.post("/",createTutorial)
router.delete("/",deleteAllTutorials)
router.delete("/:id",deleteTutorialById)
// router.put("/:id",updateTutorialById)

export default router;