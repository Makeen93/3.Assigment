import express from "express";
import Communications_controller from "../controllers/Communications_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Communications_controller();
  controller
    .getCommunications()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:communicationId", (req, res) => {
  const controller = new Communications_controller();
  controller
    .getCommunication(req.params.communicationId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested communication in not found");
    });
});
router.delete("/:communicationId", (req, res) => {
  const controller = new Communications_controller();
  controller
    .deleteCommunication(req.params.communicationId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested communication in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Communications_controller();
  controller
    .createCommunication(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:communicationId", (req, res) => {
  const controller = new Communications_controller();
  controller
    .updateCommunication(req.params.communicationId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested communication in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
