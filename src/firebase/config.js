import firebase from 'firebase/compat/app'

import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAvaN_gx57D04TYRv_-T2MNOqSCFMqsUyk',
  authDomain: 'firegram-react-747a6.firebaseapp.com',
  projectId: 'firegram-react-747a6',
  storageBucket: 'firegram-react-747a6.appspot.com',
  messagingSenderId: '829320860836',
  appId: '1:829320860836:web:5da330908648d1542c8231'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { storage, firestore, timestamp }
