import express from "express";
import Alarm_controller from "../controllers/Alarm_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Alarm_controller();
  controller
    .getAlarms()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:alarmId", (req, res) => {
  const controller = new Alarm_controller();
  controller
    .getAlarm(req.params.alarmId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested alarm in not found");
    });
});
router.delete("/:alarmId", (req, res) => {
  const controller = new Alarm_controller();
  controller
    .deleteAlarm(req.params.alarmId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested alarm in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Alarm_controller();
  controller
    .createAlarm(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:alarmId", (req, res) => {
  const controller = new Alarm_controller();
  controller
    .updateAlarm(req.params.alarmId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested alarm in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
