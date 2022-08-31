import express from "express";
import Roles_controller from "../controllers/Roles_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Roles_controller();
  controller
    .getRoles()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:roleId", (req, res) => {
  const controller = new Roles_controller();
  controller
    .getRole(req.params.roleId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested role in not found");
    });
});
router.delete("/:roleId", (req, res) => {
  const controller = new Roles_controller();
  controller
    .deleteRole(req.params.roleId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested role in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Roles_controller();
  controller
    .createRole(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:roleId", (req, res) => {
  const controller = new Roles_controller();
  controller
    .updateRole(req.params.roleId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested role in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
