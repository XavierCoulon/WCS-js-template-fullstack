const express = require("express");
const fs = require("fs");

const router = express.Router();

const multer = require("multer");

const upload = multer({
  dest: "tmp/",
  limits: {
    fileSize: 1024 * 1000 * 3,
  },
});

router.post("/monupload", upload.array("image"), (req, res) => {
  try {
    for (let i = 0; i < req.files.length; i += 1) {
      fs.rename(
        req.files[i].path,
        `public/assets/images/${req.files[i].originalname}`,
        (err) => {
          if (err) throw err;
        }
      );
    }
  } catch (error) {
    res.send("Error...");
  }
});

module.exports = router;
