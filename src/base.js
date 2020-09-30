import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDDsY0i2EraKLX9eK8eUBwTOkCc7gROFOM",
  authDomain: "recettes-app-dbr.firebaseapp.com",
  databaseURL: "https://recettes-app-dbr.firebaseio.com",})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
