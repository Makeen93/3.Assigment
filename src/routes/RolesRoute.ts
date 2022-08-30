import { Router } from "express";
const Roles_controller = require("../controllers/Roles_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Roles_controller.roles_create_post);

// POST request to delete Book.
router.post("/:id/delete", Roles_controller.roles_delete_post);

// POST request to update Book.
router.post("/:id/update", Roles_controller.roles_update_post);

// GET request for one Book.
router.get("/:id", Roles_controller.roles_detail);

// GET request for list of all Book items.
router.get("/", Roles_controller.roles_list);

module.exports = router;