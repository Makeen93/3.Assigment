import { Router } from "express";
const Announcements_controller = require("../controllers/Announcements_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Announcements_controller.announcement_create_post);

// POST request to delete Book.
router.post("/:id/delete", Announcements_controller.announcement_delete_post);

// POST request to update Book.
router.post("/:id/update", Announcements_controller.announcement_update_post);

// GET request for one Book.
router.get("/:id", Announcements_controller.announcement_detail);

// GET request for list of all Book items.
router.get("/", Announcements_controller.announcements_list);

module.exports = router;