import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';

const startApp = (user) => {
  navBar(); // DYNAMICALLY ADD THE NAVBAR
  console.warn(user);
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
};

export default startApp;
