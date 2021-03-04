const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
        <a class="navbar-brand title" href="#">Firebase Pinterest</a>
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
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-books">
                Filler 1 <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="sale-books">Filler 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="authors">Filler 3</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="favorite-authors">Filler 4</a>
            </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Placeholder"
              aria-label="Search"
            />
            </li>
          </ul>
          <div id="cart-button"></div>
          <div id="logout-button"></div>
        </div>
      </nav>
    `;
};

export default navBar;
