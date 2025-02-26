***this code upto the latest commit will not run because it is incomplete due to time constraints***
***only vision api and firestore has been incorporated so far, vertex ai is still pending***

Medical Assistant: AI-Powered Prescription Analysis

⚙️ Environment Setup

1️⃣ Prerequisites
Before running the project, ensure you have the following installed:

- Node.js & npm: Download here(https://nodejs.org/)
- Google Cloud Account with Vision API and Vertex AI enabled
- Google Cloud SDK: Install here(https://cloud.google.com/sdk/docs/install)
- Firebase CLI (for Firestore & deployment)
  ```
    npm install -g firebase-tools
  ```
2️⃣ Clone the Repository
```
  git clone https://github.com/MayeraaSingh/MedicalAssistant.git
  cd MedicalAssistant
```

3️⃣ Setup Google Cloud Credentials
1. Create a Service Account in [Google Cloud Console](https://console.cloud.google.com/).
2. Assign the necessary roles (Vision API, Vertex AI, Firestore Editor).
3. Generate a JSON key file and save it in `backend/` as:
     backend/service-account.json
4. Add this file to `.gitignore` to avoid security risks.

4️⃣ Install Dependencies

Backend Setup :
```
cd backend
npm install
```
Frontend Setup: 
```
cd ../frontend
npm install
```

🚀 Running the Project
1️⃣ Start the Backend
```
cd backend
npm run dev
```
This starts the Express server on port 3000.

2️⃣ Start the Frontend
```
cd frontend
npm run dev
```
This starts the React app on localhost:5173.

📂 Project Structure

```
MedicalAssistant/
│── backend/                # Backend API (Node.js + Express)
│   │── server.js           # Main backend logic
│   │── vision.js           # Google Vision API integration
│   │── vertex-ai.js        # AI-based NLP processing
│   │── firestore.js        # Firestore database setup
│   │── service-account.json # Google Cloud auth key (ignored in Git)
│   │── uploads/            # Stores uploaded prescription images
│   │── package.json        # Backend dependencies
│
│── frontend/               # Frontend (Vite React + Tailwind CSS)
│   │── src/                # React source files
│   │── public/             # Static assets
│   │── components/         # UI components (File Upload, Dashboard)
│   │── config.js           # API base URL configuration
│   │── package.json        # Frontend dependencies
│
│── .gitignore              # Ignore sensitive files
│── README.md               # Project documentation
```
