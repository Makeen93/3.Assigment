import express from "express";
import Service_provider_controller from "../controllers/Service_provider_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Service_provider_controller();
  controller
    .getService_providers()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:service_providerId", (req, res) => {
  const controller = new Service_provider_controller();
  controller
    .getService_provider(req.params.service_providerId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested service_provider in not found");
    });
});
router.delete("/:service_providerId", (req, res) => {
  const controller = new Service_provider_controller();
  controller
    .deleteService_provider(req.params.service_providerId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested service_provider in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Service_provider_controller();
  controller
    .createService_provider(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:service_providerId", (req, res) => {
  const controller = new Service_provider_controller();
  controller
    .updateService_provider(req.params.service_providerId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested service_provider in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
