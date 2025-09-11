// Import library yang dibutuhkan
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

// Masukkan Service Account Key Anda di sini
// Ganti dengan path ke file JSON yang Anda unduh dari Firebase Console
const serviceAccount = require('./serviceAccountKey.json');

// Inisialisasi Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Mengizinkan request dari frontend
app.use(express.json()); // Mengizinkan parsing body JSON

// Endpoint untuk menerima data survei
app.post('/api/submit-survey', async (req, res) => {
  try {
    const { userId, ...surveyData } = req.body;

    if (!userId) {
      return res.status(400).send('User ID is required.');
    }

    // Path ke koleksi survei, disesuaikan dengan aturan keamanan
    const collectionPath = `artifacts/default-app-id/users/${userId}/survey_responses`;
    await db.collection(collectionPath).add({
      ...surveyData,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(200).send('Data survei berhasil disimpan.');
  } catch (error) {
    console.error('Error saving survey data:', error);
    res.status(500).send('Terjadi kesalahan saat menyimpan data.');
  }
});

// Endpoint untuk mengambil data survei
app.get('/api/get-results', async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).send('User ID is required.');
    }

    const collectionPath = `artifacts/default-app-id/users/${userId}/survey_responses`;
    const snapshot = await db.collection(collectionPath).get();

    const results = [];
    snapshot.forEach(doc => {
      results.push({
        id: doc.id,
        ...doc.data()
      });
    });

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching survey data:', error);
    res.status(500).send('Terjadi kesalahan saat mengambil data.');
  }
});
let firebaseConfig = {};
try {
  firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG || '{}');
} catch (e) {
  console.error("Firebase config JSON parse error:", e);
}

// Jalankan server
app.listen(port, () => {
  console.log(`Server backend berjalan di http://localhost:${port}`);
});
