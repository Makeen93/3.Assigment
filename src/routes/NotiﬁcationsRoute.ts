import { Router } from "express";
const Notiﬁcations_controller = require("../controllers/Notiﬁcations_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", Notiﬁcations_controller.notiﬁcations_create_post);

// POST request to delete Book.
router.post("/:id/delete", Notiﬁcations_controller.notiﬁcations_delete_post);

// POST request to update Book.
router.post("/:id/update", Notiﬁcations_controller.notiﬁcations_update_post);

// GET request for one Book.
router.get("/:id", Notiﬁcations_controller.notiﬁcations_detail);

// GET request for list of all Book items.
router.get("/", Notiﬁcations_controller.notiﬁcations_list);

module.exports = router;