import firebase from 'firebase/app';
import 'firebase/auth';
import boards from '../components/boards';
import home from '../components/home';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      navBar();
      boards();
      logoutButton();
    } else {
      // person is NOT logged in
      navBar();
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
