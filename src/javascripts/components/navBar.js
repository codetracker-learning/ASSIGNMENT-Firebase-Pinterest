import twopp from '../../assets/twopp.png';
import pin from '../../assets/pin.png';
import board from '../../assets/board.png';

const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand text-danger ms-4" href="#"><img src="${twopp}">ractically <img src="${twopp}">interest</a>
          <button class="btn" type="submit" id="showCreateBoardButton"><img src="${board}"></button>
          <button class="btn" type="submit" id="showCreatePinButton"><img src="${pin}"></button>
          </button>
            <input class="form-inline mr-sm-2 w-25" type="search" placeholder="Search" aria-label="Search" id="searchInput">
            <button class="btn btn-outline-light" type="submit" id="searchButton">Search</button>
            <div class="btn btn-sm btn-outline-light ml-auto" type="submit" id="logOutButton"></div>
      </nav>`;
};

export default navBar;
