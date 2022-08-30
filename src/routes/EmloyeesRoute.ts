import { Router } from "express";
const Emloyees_controller = require("../controllers/Emloyees_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Emloyees_controller.emloyees_create_post);

// POST request to delete Book.
router.post("/:id/delete", Emloyees_controller.emloyees_delete_post);

// POST request to update Book.
router.post("/:id/update", Emloyees_controller.emloyees_update_post);

// GET request for one Book.
router.get("/:id", Emloyees_controller.emloyees_detail);

// GET request for list of all Book items.
router.get("/", Emloyees_controller.emloyees_list);

module.exports = router;