import { Router } from "express";
const Service_provider_controller = require("../controllers/Service_provider_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Service_provider_controller.service_provider_create_post);

// POST request to delete Book.
router.post("/:id/delete", Service_provider_controller.service_provider_delete_post);

// POST request to update Book.
router.post("/:id/update", Service_provider_controller.service_provider_update_post);

// GET request for one Book.
router.get("/:id", Service_provider_controller.service_provider_detail);

// GET request for list of all Book items.
router.get("/", Service_provider_controller.service_provider_list);

module.exports = router;