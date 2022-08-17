import * as firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}
console.log(firebaseConfig)

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
const firestore = firebase.firestore()

export { storage, firestore }
