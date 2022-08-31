import express from "express";
import User_controller from "../controllers/User_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new User_controller();
  controller
    .getUsers()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:userId", (req, res) => {
  const controller = new User_controller();
  controller
    .getUser(req.params.userId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested user in not found");
    });
});
router.delete("/:userId", (req, res) => {
  const controller = new User_controller();
  controller
    .deleteUser(req.params.userId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested user in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new User_controller();
  controller
    .createUser(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:userId", (req, res) => {
  const controller = new User_controller();
  controller
    .updateUser(req.params.userId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested user in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
