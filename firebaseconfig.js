const firebaseConfig = {
  apiKey: "AIzaSyBpJBhkNjYP4npFMzMOKcZig1b_M2SeQb4",
  authDomain: "testingapp-d5951.firebaseapp.com",
  projectId: "testingapp-d5951",
  storageBucket: "testingapp-d5951.firebasestorage.app",
  messagingSenderId: "351388469195",
  appId: "1:351388469195:web:5cf1f5dae8ec1d1b91184e",
  measurementId: "G-PYE07RR06Z"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { firebaseConfig ,auth};