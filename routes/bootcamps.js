const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Show All Bootcamps"
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp #${req.params.id}`
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Create All Bootcamps"
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp #${req.params.id}`
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp #${req.params.id}`
  });
});

module.exports = router;
