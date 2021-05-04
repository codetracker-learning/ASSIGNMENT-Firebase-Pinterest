import signOut from '../../helpers/auth/signOut';

const logoutButton = () => {
  const domString = `<button id="google-auth" class="btn">
    LOG OUT</button>`;
  document.querySelector('#logOutButton').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
