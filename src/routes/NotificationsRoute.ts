import express from "express";
import Notiﬁcations_controller from "../controllers/Notiﬁcations_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Notiﬁcations_controller();
  controller
    .getNotiﬁcations()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:notiﬁcationsId", (req, res) => {
  const controller = new Notiﬁcations_controller();
  controller
    .getNotiﬁcation(req.params.notiﬁcationsId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested notiﬁcations in not found");
    });
});
router.delete("/:notiﬁcationsId", (req, res) => {
  const controller = new Notiﬁcations_controller();
  controller
    .deleteNotiﬁcation(req.params.notiﬁcationsId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested notiﬁcations in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Notiﬁcations_controller();
  controller
    .createNotiﬁcation(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:notiﬁcationsId", (req, res) => {
  const controller = new Notiﬁcations_controller();
  controller
    .updateNotiﬁcation(req.params.notiﬁcationsId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested notiﬁcations in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
