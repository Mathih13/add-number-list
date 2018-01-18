
  import * as firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyAKtJohu8C1rL41fGGvw17OjjYuDRF1eys",
    authDomain: "pippin-kasseteller.firebaseapp.com",
    databaseURL: "https://pippin-kasseteller.firebaseio.com",
    projectId: "pippin-kasseteller",
    storageBucket: "pippin-kasseteller.appspot.com",
    messagingSenderId: "235001397810"
  }
  
  
  
  
  if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
  }
  
  
  export default firebase