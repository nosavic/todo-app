const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskContoller");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.use(authMiddleware);
router.get("/", taskController.getTasks);
router.post("/", taskController.createTask);
router.patch("/:id", taskController.updateTask);

module.exports = router;
