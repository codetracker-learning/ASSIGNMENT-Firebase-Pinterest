import signIn from '../../helpers/auth/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<h1 id="login-title">Pretty Much Pinterest</h1>
                     <button id="google-auth" class="btn rounded-pill">Log In</button>`;

  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
