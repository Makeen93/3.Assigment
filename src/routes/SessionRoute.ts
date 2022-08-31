import express from "express";
import Session_controller from "../controllers/Session_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Session_controller();
  controller
    .getSessions()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:sessionId", (req, res) => {
  const controller = new Session_controller();
  controller
    .getSession(req.params.sessionId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested session in not found");
    });
});
router.delete("/:sessionId", (req, res) => {
  const controller = new Session_controller();
  controller
    .deleteSession(req.params.sessionId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested session in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Session_controller();
  controller
    .createSession(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:sessionId", (req, res) => {
  const controller = new Session_controller();
  controller
    .updateSession(req.params.sessionId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested session in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
