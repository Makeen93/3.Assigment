import { Router } from "express";
const Session_controller = require("../controllers/Session_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Session_controller.sessions_create_post);

// POST request to delete Book.
router.post("/:id/delete", Session_controller.sessions_delete_post);

// POST request to update Book.
router.post("/:id/update", Session_controller.sessions_update_post);

// GET request for one Book.
router.get("/:id", Session_controller.sessions_detail);

// GET request for list of all Book items.
router.get("/", Session_controller.sessions_list);

module.exports = router;