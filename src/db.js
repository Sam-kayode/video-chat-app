import firebase from 'firebase'

let firebaseConfig = {
  apiKey: 'AIzaSyAtUpwLGmu4UYJNXdU9VdOiN7iDGWPGEIA',
  authDomain: 'v-chat-59524.firebaseapp.com',
  projectId: 'v-chat-59524',
  storageBucket: 'v-chat-59524.appspot.com',
  messagingSenderId: '632141406980',
  appId: '1:632141406980:web:7f47fc56a71d5b7e656651'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
