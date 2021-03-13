const navBar = (user) => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light mb-3 pb-5 pt-5">
      <img class="mx-1 rounded-pill" src="./documentation/pinterest-logo-png-1982.png" id="corner-logo"/>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-2">
          <li class="nav-item">
              <button class="btn rounded-pill m" href="#" id="boards-page">Boards</button>
          </li>
          <li class="nav-item">
              <button class="btn rounded-pill" href="#" id="pins-page">Pins</button>
          </li>
          <li class="nav-item">
              <button class="btn rounded-pill" href="#" id="favorites-page">Favorites</button>
          </li>
          <li class="nav-item" id="create-button"></li>
        </ul>
        <div class="wrapper mr-auto" id="search-bar">
          <form>
            <input
              type="text"
              id="search-bar-text"
              class="form-control rounded-pill"
              placeholder="Search"
              aria-label="Search"
            >
          </form>
        </div>
        <div class="nav-item mr-1">
          <img src="${user.photoURL}" class="rounded-circle" alt="${user.photoURL}" id="profile-icon">
        </div>
        <div id="logout-button"></div>
      </div>
    </nav>
  `;
};

export default navBar;
