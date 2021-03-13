const showBoards = (array) => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#board-title').innerHTML = '';
  document.querySelector('#create-button').innerHTML = '<button class="btn rounded-pill" href="#" id="create-new-board">Create Board</button>';

  array.forEach((item) => {
    document.querySelector('#cards').innerHTML += `
      <div class="col">
        <div class="card m-2">
          <img src="${item.image}" class="card-img alt="${item.image}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <button type="button" class="btn rounded-pill" id="show-pins--${item.firebaseKey}">Pins</button>
            <button type="button" class="btn rounded-pill" id="delete-board--${item.firebaseKey}">Delete</button>
          </div>
        </div>
      </div>
    `;
  });
};

export default showBoards;
