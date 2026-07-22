const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.cert(serviceAccount),
  databaseURL: 'https://perou-planner-default-rtdb.europe-west1.firebasedatabase.app'
});

const { getDatabase } = require('firebase-admin/database');
const db = getDatabase();

const activities = require('./backup-activities.json');
const config = require('./backup-config.json');

async function importData() {
  try {
    await db.ref('activities').set(activities);
    await db.ref('config').set(config);
    console.log('✅ Données importées!');
    process.exit(0);
  } catch (e) {
    console.error('❌ Erreur:', e);
    process.exit(1);
  }
}

importData();
