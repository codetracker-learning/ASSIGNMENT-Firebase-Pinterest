const showPins = (array) => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#create-button').innerHTML = '<button class="btn rounded-pill" href="#" id="create-new-pin">Create Pin</button>';

  array.forEach((item) => {
    document.querySelector('#cards').innerHTML += `<div class="card text-white m-2">
                                                    <img src="${item.image}" class="img-fluid" alt="${item.image}">
                                                    <div class="card-img-overlay img-fluid">
                                                      <h5 class="card-title">${item.title}</h5>
                                                      <button type="button" class="btn rounded-pill" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
                                                      <button type="button" 
                                                      data-toggle="modal" 
                                                      data-target="#formModal"
                                                      class="btn rounded-pill" 
                                                      id="update-pin--${item.firebaseKey}">
                                                      Update Pin</button>
                                                    </div>
                                                  </div>`;
  });
};

const emptyBoard = () => {
  document.querySelector('#cards').innerHTML = '<h1>There arent any Pins on this board yet</h1>';
};

export { showPins, emptyBoard };
