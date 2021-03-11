import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#cards').innerHTML = `
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="new-pin-title" aria-describedby="pinTitle" placeholder="Title" required>
      </div>
      <div class="form-group">
        <label for="title">Image URL</label>
        <input type="URL" class="form-control" id="new-pin-url" aria-describedby="url" placeholder="URL" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite-pin">
        <label class="form-check-label" for="favorite-pin">Favorite</label>
      </div>
      <button type="submit" id="submit-new-pin" class="btn btn-primary">Create Pin</button>
    </form>
  `;

  selectBoard();
};

export default addPinForm;
