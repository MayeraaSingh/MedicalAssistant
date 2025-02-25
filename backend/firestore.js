const admin = require("firebase-admin");
const path = require("path");

// Initialize Firebase Admin SDK
const serviceAccount = require(path.join(__dirname, "service-account.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "medical-assistant-451719",
});

const db = admin.firestore();

const savePrescription = async (extractedText) => {
  try {
    const docRef = await db.collection("prescriptions").add({
      text: extractedText,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    return { id: docRef.id };
  } catch (error) {
    console.error("Error saving to Firestore:", error);
    return { error: "Failed to save data" };
  }
};

module.exports = savePrescription;
