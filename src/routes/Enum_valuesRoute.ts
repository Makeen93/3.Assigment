import express from "express";
import Enum_values_controller from "../controllers/Enum_values_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Enum_values_controller();
  controller
    .getEnum_values()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:enum_valueId", (req, res) => {
  const controller = new Enum_values_controller();
  controller
    .getEnum_value(req.params.enum_valueId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested enum_value in not found");
    });
});
router.delete("/:enum_valueId", (req, res) => {
  const controller = new Enum_values_controller();
  controller
    .deleteEnum_value(req.params.enum_valueId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested enum_value in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Enum_values_controller();
  controller
    .createEnum_value(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:enum_valueId", (req, res) => {
  const controller = new Enum_values_controller();
  controller
    .updateEnum_value(req.params.enum_valueId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested enum_value in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
