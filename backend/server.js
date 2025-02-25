const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const extractTextFromImage = require("./vision");

const app = express();
app.use(cors());
app.use(express.json());

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  // Save files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Rename file
  }
});

const upload = multer({ storage });

// API Route for file upload and OCR processing
app.post("/extract-text", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const imagePath = path.join(__dirname, "uploads", req.file.filename);
  const result = await extractTextFromImage(imagePath);

  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
