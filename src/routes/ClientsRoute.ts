import { Router } from "express";
const Clients_controller = require("../controllers/Clients_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Clients_controller.clients_create_post);

// POST request to delete Book.
router.post("/:id/delete", Clients_controller.clients_delete_post);

// POST request to update Book.
router.post("/:id/update", Clients_controller.clients_update_post);

// GET request for one Book.
router.get("/:id", Clients_controller.clients_detail);

// GET request for list of all Book items.
router.get("/", Clients_controller.clients_list);

module.exports = router;