import firebase from 'firebase/app';
import 'firebase/auth';

const signMeOut = () => {
  firebase.auth().signOut();
  window.location.reload();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-sm btn-danger">Logout</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
