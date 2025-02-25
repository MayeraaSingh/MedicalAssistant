const vision = require("@google-cloud/vision");
const path = require("path");

// Initialize Google Cloud Vision API client
const client = new vision.ImageAnnotatorClient({
  keyFilename: path.join(__dirname, "service-account.json"),
});

// Function to extract text from an image
const extractTextFromImage = async (imagePath) => {
  try {
    const [result] = await client.textDetection(imagePath);
    const detections = result.textAnnotations;

    if (!detections.length) return { text: "" };

    return { text: detections[0].description };
  } catch (error) {
    console.error("Error extracting text:", error);
    return { error: "Failed to process image" };
  }
};

module.exports = extractTextFromImage;
