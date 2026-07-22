const express = require('express');
const admin = require('firebase-admin');
const path = require('path');
const serviceAccountJson = process.env.FIREBASE_KEY;
const serviceAccount = JSON.parse(serviceAccountJson);


console.log('Admin:', admin);
console.log('Admin credential:', admin.credential);

const app = express();
const PORT = process.env.PORT || 3000;

// Init Firebase
admin.initializeApp({
  credential: admin.cert(serviceAccount),
  databaseURL: 'https://perou-planner-default-rtdb.europe-west1.firebasedatabase.app'
});

const { getDatabase } = require('firebase-admin/database');
const db = getDatabase();

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// LOGIN
app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (password === 'perou2024') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// GET CONFIG
app.get('/api/config', async (req, res) => {
  try {
    const snapshot = await db.ref('config').get();
    const config = snapshot.val() || {
      password: 'perou2024',
      headerImage: null,
      categories: ['Culturel', 'Sportif', 'Nature', 'Aventure', 'Exploration'],
      users: ['Maeva', 'Briac', 'Solene', 'Maze']
    };
    res.json(config);
  } catch (e) {
    console.error('Erreur config:', e);
    res.json({
      password: 'perou2024',
      headerImage: null,
      categories: ['Culturel', 'Sportif', 'Nature', 'Aventure', 'Exploration'],
      users: ['Maeva', 'Briac', 'Solene', 'Maze']
    });
  }
});

// SAVE CONFIG
app.post('/api/config', async (req, res) => {
  try {
    await db.ref('config').set(req.body);
    res.json({ success: true });
  } catch (e) {
    console.error('Erreur save config:', e);
    res.json({ success: false });
  }
});

// GET ACTIVITIES
app.get('/api/activities', async (req, res) => {
  try {
    const snapshot = await db.ref('activities').get();
    const activities = snapshot.val() || {
      'Culturel': [],
      'Sportif': [],
      'Nature': [],
      'Aventure': [],
      'Exploration': []
    };
    res.json(activities);
  } catch (e) {
    console.error('Erreur activities:', e);
    res.json({
      'Culturel': [],
      'Sportif': [],
      'Nature': [],
      'Aventure': [],
      'Exploration': []
    });
  }
});

// SAVE ACTIVITIES
app.post('/api/activities', async (req, res) => {
  try {
    await db.ref('activities').set(req.body);
    res.json({ success: true });
  } catch (e) {
    console.error('Erreur save activities:', e);
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Pérou App sur http://localhost:${PORT}`);
});
