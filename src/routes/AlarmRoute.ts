import { Router } from "express";
const Alarm_controller = require("../controllers/Alarm_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Alarm_controller.alarm_create_post);

// POST request to delete Book.
router.post("/:id/delete", Alarm_controller.alarm_delete_post);

// POST request to update Book.
router.post("/:id/update", Alarm_controller.alarm_update_post);

// GET request for one Book.
router.get("/:id", Alarm_controller.alarm_detail);

// GET request for list of all Book items.
router.get("/", Alarm_controller.alarm_list);

module.exports = router;