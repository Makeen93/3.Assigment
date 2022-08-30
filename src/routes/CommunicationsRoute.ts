import { Router } from "express";
const Communications_controller = require("../controllers/Communications_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Communications_controller.communications_create_post);

// POST request to delete Book.
router.post("/:id/delete", Communications_controller.communications_delete_post);

// POST request to update Book.
router.post("/:id/update", Communications_controller.communications_update_post);

// GET request for one Book.
router.get("/:id", Communications_controller.communications_detail);

// GET request for list of all Book items.
router.get("/", Communications_controller.communications_list);

module.exports = router;