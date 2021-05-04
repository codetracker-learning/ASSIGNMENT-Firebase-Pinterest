import profilePic from '../../assets/profilePic.png';

const showBoards = (array) => {
  document.querySelector('#profileContainer').innerHTML = `<img src="${profilePic}">`;
  document.querySelector('h6').innerHTML = '@thedigitalmenagerie';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-sm mb-4" id="add-board-btn">Create Board</button>';

  document.querySelector('#content').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#content').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
    <h5 class="card-title mx-auto">${item.title}</h5>
      <button class="btn border-light outline-light view-pins-btn" data-toggle="modal" data-target="#formModal" id="view-pins-btn--${item.firebaseKey}">View Pins</button>
      <button class="btn border-light outline-light delete-board-btn" id="delete-board--${item.firebaseKey}">Delete Board</button>
    </div>
  </div>`;
  });
};

const noBoards = () => {
  document.querySelector('#content').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, noBoards };
