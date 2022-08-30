import { Router } from "express";
const Dispute_controller = require("../controllers/Dispute_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Dispute_controller.dispute_create_post);

// POST request to delete Book.
router.post("/:id/delete", Dispute_controller.dispute_delete_post);

// POST request to update Book.
router.post("/:id/update", Dispute_controller.dispute_update_post);

// GET request for one Book.
router.get("/:id", Dispute_controller.dispute_detail);

// GET request for list of all Book items.
router.get("/", Dispute_controller.dispute_list);

module.exports = router;