import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#content').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = `
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="pinDescription">Pin Description</label>
        <input type="text" class="form-control" id="pinTitle" aria-describedby="pinDescription" placeholder="Enter Description" required>
      </div>
      <div class="form-group">
        <label for="pinImage">Image URL</label>
        <input type="url" class="form-control" id="pinImage" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <button type="submit" id="submit-pin" class="btn">Create Pin</button>
    </form>`;

  selectBoard();
};

export default addPinForm;
