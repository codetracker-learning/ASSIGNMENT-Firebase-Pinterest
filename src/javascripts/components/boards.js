const showBoards = (array) => {
  document.querySelector('#app').innerHTML = `
    <h1>Boards</h1>
    <div id="boards-container" class="row justify-content-center"></div>`;

  array.forEach((item) => {
    document.querySelector('#boards-container').innerHTML += `
    <div class="col-sm-6">
      <div class="card">
        <h5 class="card-title">${item.title}</h5>
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <hr>
          <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="view-board-btn--${item.firebaseKey}">View Board</button>
          <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
        </div>
      </div>
    </div>`;
  });
};

export default showBoards;
