const showPins = (array) => {
  // RESET USER-CONTAINER
  document.querySelector('#app').innerHTML = `
  <button class="btn btn-success" id="add-pin">Add New Pin</button>
  <button class="btn btn-info" id="back-to-boards">Back To Boards</button>
  <h1>Pins</h1>
  <div id="user-container" class="row justify-content-center"></div>`;

  // SHOW PINS
  array.forEach((item) => {
    document.querySelector('#user-container').innerHTML += `
    <div class="col-sm-6">
      <div class="card">
        <h5 class="card-title">${item.title}</h5>
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <hr>
          <button class="btn btn-dark" id="edit-pin-btn--${item.firebaseKey}">Move Pin</button>
          <button class="btn btn-danger" id="delete-pin--${item.firebaseKey}">Remove Pin</button>
        </div>
      </div>
    </div>`;
  });
};

export default showPins;
