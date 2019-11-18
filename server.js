const express = require("express");
const dotenv = require("dotenv");

// Load env 変数
dotenv.config({ path: "./config/config.env" });

const app = express();

// Routes
app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: "Show All Bootcamps"
    }
  });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: `Show bootcamp #${req.params.id}`
    }
  });
});

app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: "Create All Bootcamps"
    }
  });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: `Update bootcamp #${req.params.id}`
    }
  });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: `Delete bootcamp #${req.params.id}`
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
