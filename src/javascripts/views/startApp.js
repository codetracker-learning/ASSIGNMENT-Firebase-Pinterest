import logoutButton from '../components/loginButton';
import navBar from '../components/navBar';

const startApp = () => {
  navBar(); // DYNAMICALLY ADD THE NAVBAR
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
};

export default startApp;
