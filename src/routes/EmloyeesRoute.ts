import express from "express";
import Emloyees_controller from "../controllers/Emloyees_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Emloyees_controller();
  controller
    .getEmloyees()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:emloyeId", (req, res) => {
  const controller = new Emloyees_controller();
  controller
    .getEmloye(req.params.emloyeId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested emloye in not found");
    });
});
router.delete("/:emloyeId", (req, res) => {
  const controller = new Emloyees_controller();
  controller
    .deleteEmloye(req.params.emloyeId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested emloye in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Emloyees_controller();
  controller
    .createEmloye(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:emloyeId", (req, res) => {
  const controller = new Emloyees_controller();
  controller
    .updateEmloye(req.params.emloyeId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested emloye in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
