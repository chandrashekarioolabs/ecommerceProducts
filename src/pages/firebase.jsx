import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCoB4Oa-I0pr319UQnhzKfjUxEB1oKCuIQ',
  authDomain: 'product-240397.firebaseapp.com',
  projectId: 'product-240397',
  storageBucket: 'product-240397.appspot.com',
  messagingSenderId: '202546308038',
  appId: '1:202546308038:web:1f56954e79802eb24d08c7',
  measurementId: 'G-1E8VNZ77GP',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
