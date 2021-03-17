import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './auth/apiKeys';
import startApp from '../views/startApp';
import loginButton from '../components/buttons/loginButton';
import home from '../views/home';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user); // IF LOGGED IN
    } else {
      home(); // IF LOGGED OUT
      loginButton();
    }
  });
};

export default checkLoginStatus;
