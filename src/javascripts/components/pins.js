const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-sm mb-4" id="add-pin-btn">Create Pin</button>';
  document.querySelector('#profileContainer').innerHTML = '';
  document.querySelector('h6').innerHTML = '';
  document.querySelector('#content').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#content').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
    <h5 class="card-title mx-auto">${item.title}</h5>
    <button class="btn border-light outline-light view-pins-btn" data-toggle="modal" data-target="#formModal" id="update-pins-btn--${item.firebaseKey}">Update Pin</button>
      <button class="btn border-light outline-light delete-pin-btn" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
    </div>
  </div>`;
  });
};

const noPins = () => {
  document.querySelector('#content').innerHTML = '<h1>No Boards</h1>';
};

export { showPins, noPins };
