import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#app').innerHTML = `
    <div id="user-container" class="row justify-content-center"></div>`;

  document.querySelector('#user-container').innerHTML = `
    <form id="pin-form" class="my-4">
      <div class="form-group">
        <label for="pin-title">Pin Title</label>
        <input type="text" class="form-control" id="pin-title" placeholder="Pin Title" required>
      </div>
      <div class="form-group">
        <label for="pin-image">Pin Image</label>
        <input type="text" class="form-control" id="pin-image" placeholder="Pin Url" required>
      </div>
      <div class="form-group" id="select-board"></div>
      <button type="submit" id="submit-pin" class="btn btn-primary">Submit Pins</button>
    </form>`;

  selectBoard();
};

export default addPinForm;
