import express from "express";
import Dispute_controller from "../controllers/Dispute_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Dispute_controller();
  controller
    .getDisputes()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:disputeId", (req, res) => {
  const controller = new Dispute_controller();
  controller
    .getDispute(req.params.disputeId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested dispute in not found");
    });
});
router.delete("/:disputeId", (req, res) => {
  const controller = new Dispute_controller();
  controller
    .deleteDispute(req.params.disputeId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested dispute in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Dispute_controller();
  controller
    .createDispute(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:disputeId", (req, res) => {
  const controller = new Dispute_controller();
  controller
    .updateDispute(req.params.disputeId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested dispute in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
