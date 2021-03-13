const showPins = (array) => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#board-title').innerHTML = '';
  document.querySelector('#create-button').innerHTML = '<button class="btn rounded-pill" href="#" id="create-new-pin">Create Pin</button>';

  array.forEach((item) => {
    document.querySelector('#cards').innerHTML += `
      <div class="col">
        <div class="card m-2">
          <img src="${item.image}" class="card-img alt="${item.image}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <button type="button" class="btn rounded-pill" id="delete-pin--${item.firebaseKey}">Delete</button>
            <button type="button" data-toggle="modal" data-target="#formModal" class="btn rounded-pill" id="update-pin--${item.firebaseKey}">Update</button>
          </div>
        </div>
      </div>
  `;
  });
};

const emptyBoard = () => {
  document.querySelector('#cards').innerHTML = '<h1>There arent any Pins on this board yet</h1>';
};

export { showPins, emptyBoard };
