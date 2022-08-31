import express from "express";
import Agreements_controller from "../controllers/Agreements_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Agreements_controller();
  controller
    .getAgreements()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:agreementId", (req, res) => {
  const controller = new Agreements_controller();
  controller
    .getAgreement(req.params.agreementId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested agreement in not found");
    });
});
router.delete("/:agreementId", (req, res) => {
  const controller = new Agreements_controller();
  controller
    .deleteAgreement(req.params.agreementId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested agreement in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Agreements_controller();
  controller
    .createAgreement(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:agreementId", (req, res) => {
  const controller = new Agreements_controller();
  controller
    .updateAgreement(req.params.agreementId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested agreement in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
