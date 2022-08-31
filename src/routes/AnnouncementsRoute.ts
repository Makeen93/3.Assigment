import express from "express";
import Announcements_controller from "../controllers/Announcements_controller";

const router = express.Router();

router.get("/", (_req, res) => {
  const controller = new Announcements_controller();
  controller
    .getAnnouncements()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.get("/:announcementId", (req, res) => {
  const controller = new Announcements_controller();
  controller
    .getAnnouncement(req.params.announcementId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested announcement in not found");
    });
});
router.delete("/:announcementId", (req, res) => {
  const controller = new Announcements_controller();
  controller
    .deleteAnnouncement(req.params.announcementId)
    .then((_) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("the requested announcement in not found");
    });
});
router.post("/create", (req, res) => {
  const controller = new Announcements_controller();
  controller
    .createAnnouncement(req.body)
    .then((_) => {
      res.send("created");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});
router.put("/update/:announcementId", (req, res) => {
  const controller = new Announcements_controller();
  controller
    .updateAnnouncement(req.params.announcementId, req.body)
    .then((response) => {
      if (response != null) res.send("updated");
      else res.status(422).send("the requested announcement in not found");
    })
    .catch((err) => {
      res.status(422).send(err);
    });
});

export default router;
