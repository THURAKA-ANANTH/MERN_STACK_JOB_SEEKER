import express from "express";
import { deleteJob, getAllJobs, getmyJobs, postJobs, updateJob } from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";


const router = express.Router();
router.get("/getall",getAllJobs);
router.post("/post",isAuthorized,postJobs);
router.get("/getmyjob",isAuthorized,getmyJobs);
router.put("/updatejob/:id",isAuthorized,updateJob);
router.delete("/deletejob/:id",isAuthorized,deleteJob);

export default router;