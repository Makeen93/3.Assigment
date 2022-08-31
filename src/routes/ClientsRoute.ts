import express from "express";
import Clients_controller from "../controllers/Clients_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Clients_controller();
  controller
    .getClients()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:clientId", (req, res) => {
  const controller = new Clients_controller();
  controller
    .getClient(req.params.clientId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested client in not found");
    });
});
router.delete("/:clientId", (req, res) => {
  const controller = new Clients_controller();
  controller
    .deleteClient(req.params.clientId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested client in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Clients_controller();
  controller
    .createClient(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:clientId", (req, res) => {
  const controller = new Clients_controller();
  controller
    .updateClient(req.params.clientId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested client in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
