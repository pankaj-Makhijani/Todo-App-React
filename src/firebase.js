import * as firebase from 'firebase';const config = {
    apiKey: "AIzaSyBrr43_t_3F3jJQDsB6R0zjhO_ZYMehrp4",
    authDomain: "ENTER YOURS HERE",
    databaseURL: "https://react-todo-12071.firebaseio.com",
    projectId: "react-todo-12071",
    storageBucket: "ENTER YOURS HERE",
    messagingSenderId: "753676181526"
  }
  firebase.initializeApp(config);
  const databaseRef = firebase.database().ref();
  export const todosRef = databaseRef.child("todos")