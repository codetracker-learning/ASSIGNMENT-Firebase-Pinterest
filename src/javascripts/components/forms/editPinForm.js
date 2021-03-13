import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <h1>Pin to a board</h1>
      <form id="submit-pin-form" class="mb-4">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="new-pin-title" aria-describedby="pinTitle" placeholder="Title" value="${pinObject.data.title}" required>
        </div>
        <div class="form-group">
          <label for="title">Image URL</label>
          <input type="URL" class="form-control" id="new-pin-url" aria-describedby="url" placeholder="URL" value="${pinObject.data.image}" required>
        </div>
        <div class="form-group" id="select-board">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="favorite-pin">
          <label class="form-check-label" for="favorite-pin">Favorite</label>
        </div>
        <button type="submit" class="btn rounded-pill" id="update-this-pin--${pinObject.data.firebaseKey}">Update Pin</button>
      </form>
  `;

  selectBoard(pinObject);
};

export default editPinForm;
