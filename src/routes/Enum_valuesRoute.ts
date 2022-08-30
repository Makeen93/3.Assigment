import { Router } from "express";
const Enum_values_controller = require("../controllers/Enum_values_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Enum_values_controller.enum_values_create_post);

// POST request to delete Book.
router.post("/:id/delete", Enum_values_controller.enum_values_delete_post);

// POST request to update Book.
router.post("/:id/update", Enum_values_controller.enum_values_update_post);

// GET request for one Book.
router.get("/:id", Enum_values_controller.enum_values_detail);

// GET request for list of all Book items.
router.get("/", Enum_values_controller.enum_values_list);

module.exports = router;