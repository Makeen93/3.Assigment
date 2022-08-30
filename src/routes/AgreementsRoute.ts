import { Router } from "express";
const Agreements_controller = require("../controllers/Agreements_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Agreements_controller.agreements_create_post);

// POST request to delete Book.
router.post("/:id/delete", Agreements_controller.agreements_delete_post);

// POST request to update Book.
router.post("/:id/update", Agreements_controller.agreements_update_post);

// GET request for one Book.
router.get("/:id", Agreements_controller.agreements_detail);

// GET request for list of all Book items.
router.get("/", Agreements_controller.agreements_list);

module.exports = router;