import twopp from '../../assets/twopp.png';

const beforeAuthDomBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id=beforeNavigation>
  <nav class="beforeNavbar navbar-expand-lg navbar-light bg-light">
   <a class="beforeNavbar-brand text-danger ms-4" href="#"><img src="${twopp}">ractically <img src="${twopp}">interest</a>
        <div class="btn btn-sm btn-outline-light" type="submit" id="login-button"></div>
  </nav>
</div>
<div id="main-container">
  <div id="add-button"></div>
  <div id="form-container"></div>
  <div id="beforeAuthContent">
  <h2>Get your pin on.</h2>
  </div>
</div>`;
};

export default beforeAuthDomBuilder;
