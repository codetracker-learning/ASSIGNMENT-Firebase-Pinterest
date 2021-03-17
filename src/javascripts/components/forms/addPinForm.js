import selectBoard from './selectBoard';

const addPinForm = (uid) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">pin Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Pin Title" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <button type="submit" id="submit-pin" class="btn btn-sm btn-secondary">Submit pin</button>
    </form>`;
  selectBoard(uid);
};

export default addPinForm;
