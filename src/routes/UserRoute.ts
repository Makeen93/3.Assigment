import { Router } from "express";
const User_controller = require("../controllers/User_controller");

const router = Router();

// POST request for creating Book.
router.post("/create",User_controller.users_create_post);

// POST request to delete Book.
router.post("/:id/delete", User_controller.user_delete_post);

// POST request to update Book.
router.post("/:id/update", User_controller.users_update_post);

// GET request for one Book.
router.get("/:id", User_controller.users_detail);

// GET request for list of all Book items.
router.get("/", User_controller.users_list);

module.exports = router;